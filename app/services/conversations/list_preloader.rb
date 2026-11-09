# OnlineSIM: loads in bulk what the conversation list partial otherwise queries for every row
# (latest message, latest non-activity message, unread incoming count), so a page costs a few
# queries instead of several per conversation. Expects conversations of a single account,
# which is what the account-scoped list endpoints return.
class Conversations::ListPreloader
  # Same cap as Conversation#unread_incoming_messages (last 10).
  UNREAD_LIMIT = 10

  def initialize(conversations)
    @conversations = conversations.to_a
  end

  def perform
    return @conversations if @conversations.empty?

    ids = @conversations.map(&:id)
    account_id = @conversations.first.account_id
    latest = latest_messages(ids, account_id).index_by(&:conversation_id)
    latest_non_activity = latest_messages(ids, account_id, exclude_activity: true).index_by(&:conversation_id)
    unread = unread_counts(ids, account_id)

    @conversations.each do |conversation|
      messages = { last_message: latest[conversation.id], last_non_activity_message: latest_non_activity[conversation.id] }
      messages.each_value { |message| message&.association(:conversation)&.target = conversation }
      conversation.list_preload = messages
      conversation.unread_incoming_messages_count = [unread.fetch(conversation.id, 0), UNREAD_LIMIT].min
    end
  end

  private

  # One indexed LIMIT 1 lookup per conversation, all in a single query.
  def latest_messages(ids, account_id, exclude_activity: false)
    activity_filter = exclude_activity ? "AND m.message_type != #{Message.message_types[:activity]}" : ''
    messages = Message.find_by_sql([<<~SQL.squish, { ids: ids, account_id: account_id }])
      SELECT latest.* FROM unnest(ARRAY[:ids]::integer[]) AS c(id)
      CROSS JOIN LATERAL (
        SELECT m.* FROM messages m
        WHERE m.conversation_id = c.id AND m.account_id = :account_id #{activity_filter}
        ORDER BY m.created_at DESC, m.id DESC
        LIMIT 1
      ) latest
    SQL
    ActiveRecord::Associations::Preloader.new(records: messages, associations: [:sender, { attachments: { file_attachment: :blob } }]).call
    messages
  end

  def unread_counts(ids, account_id)
    Message.joins(:conversation)
           .where(conversation_id: ids, account_id: account_id)
           .incoming
           .where('conversations.agent_last_seen_at IS NULL OR messages.created_at > conversations.agent_last_seen_at')
           .reorder(nil)
           .group(:conversation_id)
           .count
  end
end

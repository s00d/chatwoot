class MessageFinder
  def initialize(conversation, params)
    @conversation = conversation
    @params = params
  end

  def perform
    current_messages
  end

  private

  def conversation_messages
    @conversation.messages.includes(:attachments, :sender, sender: { avatar_attachment: [:blob] })
  end

  def messages
    return conversation_messages if @params[:filter_internal_messages].blank?

    conversation_messages.where.not('private = ? OR message_type = ?', true, 2)
  end

  def current_messages
    limit = 20
    limit = @params[:limit].to_i if @params[:limit].present?

    if @params[:after].present? && @params[:before].present?
      messages_between(@params[:after].to_i, @params[:before].to_i, limit)
    elsif @params[:before].present?
      messages_before(@params[:before].to_i, limit)
    elsif @params[:after].present?
      messages_after(@params[:after].to_i, limit)
    else
      messages_latest(limit)
    end
  end

  def messages_after(after_id, limit)
    messages.reorder('created_at asc').where('id > ?', after_id).limit(limit)
  end

  def messages_before(before_id, limit)
    messages.reorder('created_at desc').where('id < ?', before_id).limit(limit).reverse
  end

  def messages_between(after_id, before_id, limit)
    messages.reorder('created_at asc').where('id >= ? AND id < ?', after_id, before_id).limit(1000)
  end

  def messages_latest(limit)
    messages.reorder('created_at desc').limit(limit).reverse
  end
end

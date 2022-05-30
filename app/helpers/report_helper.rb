module ReportHelper
  private

  def scope
    case params[:type]
    when :account
      account
    when :inbox
      inbox
    when :agent
      user
    when :label
      label
    when :team
      team
    end
  end

  def conversations_count
    (get_grouped_values scope.conversations.where(account_id: account.id)).count
  end

  def incoming_messages_count
    (get_grouped_values scope.messages.where(account_id: account.id).incoming.unscope(:order)).count
  end

  def outgoing_messages_count
    (get_grouped_values scope.messages.where(account_id: account.id).outgoing.unscope(:order)).count
  end

  def resolutions_count
    (get_grouped_values scope.conversations.where(account_id: account.id).resolved).count
  end

  def avg_first_response_time
    grouped_reporting_events = (get_grouped_values scope.reporting_events.where(name: 'first_response', account_id: account.id))
    return grouped_reporting_events.average(:value_in_business_hours) if params[:business_hours]

    grouped_reporting_events.average(:value)
  end

  def avg_resolution_time
    grouped_reporting_events = (get_grouped_values scope.reporting_events.where(name: 'conversation_resolved', account_id: account.id))
    return grouped_reporting_events.average(:value_in_business_hours) if params[:business_hours]

    grouped_reporting_events.average(:value)
  end

  def avg_resolution_time_summary
    reporting_events = scope.reporting_events
                            .where(name: 'conversation_resolved', account_id: account.id, created_at: range)
    avg_rt = params[:business_hours] ? reporting_events.average(:value_in_business_hours) : reporting_events.average(:value)

    return 0 if avg_rt.blank?

    avg_rt
  end

  def avg_first_response_time_summary
    reporting_events = scope.reporting_events
                            .where(name: 'first_response', account_id: account.id, created_at: range)
    avg_frt = params[:business_hours] ? reporting_events.average(:value_in_business_hours) : reporting_events.average(:value)

    return 0 if avg_frt.blank?

    avg_frt
  end

  def resolutions_work_time(user)
    result_work_time = {}
    range.each do |date|
      work_date = date.next_day.strftime('%Y-%m-%d').to_s
      key = format(::Redis::Alfred::OPERATORS_TRACKER_DATA, date: work_date)
      s_work_time = Redis::Alfred.hget(key, user.id)
      s_work_time = 0 if s_work_time.blank?
      result_work_time[work_date] = s_work_time.to_i / 3600
    end

    result_work_time
  end
end

module Api::V2::Accounts::ReportsHelper
  def generate_agents_report
    Current.account.users.map do |agent|
      agent_report = generate_report({ type: :agent, id: agent.id })
      work_second = time_to_minutes(agent_report[:resolutions_work_time])
      work_str = time_to_date(agent_report[:resolutions_work_time])
      [agent.name] + generate_readable_report_metrics(agent_report) + [work_second] + [work_str]
    end
  end

  def generate_inboxes_report
    Current.account.inboxes.map do |inbox|
      inbox_report = generate_report({ type: :inbox, id: inbox.id })
      [inbox.name, inbox.channel&.name] + generate_readable_report_metrics(inbox_report)
    end
  end

  def generate_teams_report
    Current.account.teams.map do |team|
      team_report = generate_report({ type: :team, id: team.id })
      [team.name] + generate_readable_report_metrics(team_report)
    end
  end

  def generate_labels_report
    Current.account.labels.map do |label|
      label_report = generate_report({ type: :label, id: label.id })
      [label.title] + generate_readable_report_metrics(label_report)
    end
  end

  def generate_report(report_params)
    V2::ReportBuilder.new(
      Current.account,
      report_params.merge(
        {
          since: params[:since],
          until: params[:until],
          business_hours: ActiveModel::Type::Boolean.new.cast(params[:business_hours])
        }
      )
    ).short_summary
  end

  private

  def generate_readable_report_metrics(report_metric)
    [
      report_metric[:conversations_count],
      Reports::TimeFormatPresenter.new(report_metric[:avg_first_response_time]).format,
      Reports::TimeFormatPresenter.new(report_metric[:avg_resolution_time]).format
    ]
  end

  def time_to_minutes(time_in_seconds)
    (time_in_seconds / 60).to_i
  end

  def time_to_date(time_in_seconds)
    hh = time_in_seconds / 3600
    hh = "0#{hh}" if hh < 10
    mm = time_in_seconds / 60 % 60
    mm = "0#{mm}" if mm < 10
    ss = time_in_seconds % 60
    ss = "0#{ss}" if ss < 10
    format('%<hh>s:%<mm>s:%<ss>s', hh: hh.to_s, mm: mm.to_s, ss: ss.to_s)
  end
end

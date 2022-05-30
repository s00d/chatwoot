class Api::V2::Accounts::ReportsController < Api::V1::Accounts::BaseController
  before_action :check_authorization

  def index
    builder = V2::ReportBuilder.new(Current.account, report_params)
    data = builder.build
    render json: data
  end

  def summary
    render json: summary_metrics
  end

  def agents
    @work_time = {}
    @work_hours = {}

    Current.account.users.map do |agent|
      result_work_time = 0
      start = Time.zone.at(params[:since].to_i)
      stop = Time.zone.at(params[:until].to_i)
      diff = (stop.to_date - start.to_date).to_i + 1

      (0...diff).each do
        work_date = start.strftime('%Y-%m-%d').to_s
        key = format(::Redis::Alfred::OPERATORS_TRACKER_DATA, date: work_date)
        s_work_time = Redis::Alfred.hget(key, agent.id)
        result_work_time += s_work_time.to_i if s_work_time.present?
        start = start.next_day
      end
      hh = result_work_time / 3600
      hh = "0#{hh}" if hh < 10
      mm = result_work_time / 60 % 60
      mm = "0#{mm}" if mm < 10
      ss = result_work_time % 60
      ss = "0#{ss}" if ss < 10
      @work_hours[agent.id] = format('%<hh>s:%<mm>s:%<ss>s', hh: hh.to_s, mm: mm.to_s, ss: ss.to_s)
      @work_time[agent.id] = result_work_time / 60
    end

    response.headers['Content-Type'] = 'text/csv'
    response.headers['Content-Disposition'] = 'attachment; filename=agents_report.csv'
    render layout: false, template: 'api/v2/accounts/reports/agents.csv.erb', format: 'csv'
  end

  def inboxes
    response.headers['Content-Type'] = 'text/csv'
    response.headers['Content-Disposition'] = 'attachment; filename=inboxes_report.csv'
    render layout: false, template: 'api/v2/accounts/reports/inboxes.csv.erb', format: 'csv'
  end

  def labels
    response.headers['Content-Type'] = 'text/csv'
    response.headers['Content-Disposition'] = 'attachment; filename=labels_report.csv'
    render layout: false, template: 'api/v2/accounts/reports/labels.csv.erb', format: 'csv'
  end

  def teams
    response.headers['Content-Type'] = 'text/csv'
    response.headers['Content-Disposition'] = 'attachment; filename=teams_report.csv'
    render layout: false, template: 'api/v2/accounts/reports/teams.csv.erb', format: 'csv'
  end

  def conversations
    return head :unprocessable_entity if params[:type].blank?

    render json: conversation_metrics
  end

  private

  def check_authorization
    raise Pundit::NotAuthorizedError unless Current.account_user.administrator?
  end

  def common_params
    {
      type: params[:type].to_sym,
      id: params[:id],
      group_by: params[:group_by],
      business_hours: ActiveModel::Type::Boolean.new.cast(params[:business_hours])
    }
  end

  def current_summary_params
    common_params.merge({
                          since: range[:current][:since],
                          until: range[:current][:until]
                        })
  end

  def previous_summary_params
    common_params.merge({
                          since: range[:previous][:since],
                          until: range[:previous][:until]
                        })
  end

  def report_params
    common_params.merge({
                          metric: params[:metric],
                          since: params[:since],
                          until: params[:until],
                          timezone_offset: params[:timezone_offset]
                        })
  end

  def conversation_params
    {
      type: params[:type].to_sym,
      user_id: params[:user_id],
      page: params[:page].presence || 1
    }
  end

  def range
    {
      current: {
        since: params[:since],
        until: params[:until]
      },
      previous: {
        since: (params[:since].to_i - (params[:until].to_i - params[:since].to_i)).to_s,
        until: params[:since]
      }
    }
  end

  def summary_metrics
    summary = V2::ReportBuilder.new(Current.account, current_summary_params).summary
    summary[:previous] = V2::ReportBuilder.new(Current.account, previous_summary_params).summary
    summary
  end

  def conversation_metrics
    V2::ReportBuilder.new(Current.account, conversation_params).conversation_metrics
  end
end

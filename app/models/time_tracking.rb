# == Schema Information
#
# Table name: time_trackings
#
#  id         :bigint           not null, primary key
#  active_at  :datetime         not null
#  date_at    :date             not null
#  workime    :bigint           default(0), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  account_id :bigint
#  user_id    :bigint
#
# Indexes
#
#  index_time_tracking_users_on_account_id        (account_id)
#  index_time_tracking_users_on_user_id           (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (account_id => accounts.id)
#  fk_rails_...  (user_id => users.id)
#

class TimeTracking < ApplicationRecord
  belongs_to :account
  belongs_to :user
  belongs_to :inviter, class_name: 'User', optional: true

  accepts_nested_attributes_for :account

  after_create_commit :notify_creation
  after_destroy :notify_deletion, :remove_user_from_account

  def remove_user_from_account
    ::Agents::DestroyService.new(account: account, user: user).perform
  end

  private

  def notify_creation
    Rails.configuration.dispatcher.dispatch(TIME_TRACKING_ADDED, Time.zone.now, account: account)
  end

  def notify_deletion
    Rails.configuration.dispatcher.dispatch(TIME_TRACKING_REMOVED, Time.zone.now, account: account)
  end
end

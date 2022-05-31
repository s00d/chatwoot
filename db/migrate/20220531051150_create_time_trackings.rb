class CreateTimeTrackings < ActiveRecord::Migration[6.1]
  def change
    create_table :time_trackings do |t|
      t.bigint :account_id
      t.bigint :user_id
      t.bigint :workime, default: 0, null: false
      t.datetime :active_at, default: -> { 'CURRENT_TIMESTAMP' }, null: false
      t.date :date_at, default: -> { 'DATE(NOW())' }, null: false

      t.timestamps

      t.index %w[account_id user_id date_at], name: 'index_time_tracking_on_account_id_and_user_id', unique: true
      t.index ['account_id'], name: 'index_time_tracking_users_on_account_id'
      t.index ['user_id'], name: 'index_time_tracking_users_on_user_id'
    end
    add_foreign_key 'time_trackings', 'accounts'
    add_foreign_key 'time_trackings', 'users'
  end

  def down
    drop_table :time_trackings
  end
end

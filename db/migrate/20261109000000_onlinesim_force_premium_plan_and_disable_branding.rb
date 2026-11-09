# OnlineSIM: the 3.11 fork hardcoded a premium plan and removed all "Powered by" branding.
# Upgraded databases still carry the 'community' plan row and accounts without disable_branding.
class OnlinesimForcePremiumPlanAndDisableBranding < ActiveRecord::Migration[7.2]
  def up
    { 'INSTALLATION_PRICING_PLAN' => ChatwootHub.pricing_plan,
      'INSTALLATION_PRICING_PLAN_QUANTITY' => ChatwootHub.pricing_plan_quantity,
      'INSTALLATION_IDENTIFIER' => ChatwootHub.installation_identifier }.each do |name, value|
      config = InstallationConfig.find_or_initialize_by(name: name)
      config.update!(value: value)
    end

    defaults = InstallationConfig.find_by(name: 'ACCOUNT_LEVEL_FEATURE_DEFAULTS')
    if defaults&.value.present?
      defaults.value = defaults.value.map { |f| f['name'] == 'disable_branding' ? f.merge('enabled' => true) : f }
      defaults.save!
    end

    Account.find_each { |account| account.enable_features!('disable_branding') }

    GlobalConfig.clear_cache
  end

  def down; end
end

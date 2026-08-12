require 'rails_helper'

RSpec.describe ChatwootHub do
  describe '.base_url' do
    it 'defaults to the OnlineSIM hub url' do
      with_modified_env CHATWOOT_HUB_URL: nil do
        expect(described_class.base_url).to eq('https://hub.2.chatwoot.on-mail.ru')
      end
    end

    it 'allows overriding hub url via CHATWOOT_HUB_URL in any environment' do
      with_modified_env CHATWOOT_HUB_URL: 'https://custom.example.com' do
        allow(Rails).to receive(:env).and_return(ActiveSupport::StringInquirer.new('production'))

        expect(described_class.base_url).to eq('https://custom.example.com')
      end
    end
  end
end

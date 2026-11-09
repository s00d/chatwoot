require 'rails_helper'

RSpec.describe CleanupOldContactAvatarsJob do
  let(:account) { create(:account) }
  let(:avatar_file) { Rails.root.join('spec/assets/avatar.png') }
  let(:sync_attributes) { { 'avatar_url_hash' => 'abc', 'last_avatar_sync_at' => 1.year.ago.iso8601, 'city' => 'Riga' } }

  def attach_avatar(record, created_at:)
    record.avatar.attach(io: File.open(avatar_file), filename: 'avatar.png', content_type: 'image/png')
    record.avatar.attachment.update!(created_at: created_at)
  end

  describe 'old avatars' do
    it 'purges contact avatars older than 90 days and clears the avatar sync markers' do
      old_contact = create(:contact, account: account, additional_attributes: sync_attributes)
      attach_avatar(old_contact, created_at: 100.days.ago)
      fresh_contact = create(:contact, account: account)
      attach_avatar(fresh_contact, created_at: 10.days.ago)

      described_class.perform_now

      expect(old_contact.reload.avatar).not_to be_attached
      expect(old_contact.additional_attributes).to eq('city' => 'Riga')
      expect(fresh_contact.reload.avatar).to be_attached
    end

    it 'keeps avatars of agents' do
      agent = create(:user, account: account)
      attach_avatar(agent, created_at: 1.year.ago)

      described_class.perform_now

      expect(agent.reload.avatar).to be_attached
    end

    it 'uses CONTACT_AVATAR_MAX_AGE_DAYS' do
      contact = create(:contact, account: account)
      attach_avatar(contact, created_at: 20.days.ago)

      with_modified_env CONTACT_AVATAR_MAX_AGE_DAYS: '14' do
        described_class.perform_now
      end

      expect(contact.reload.avatar).not_to be_attached
    end
  end

  describe 'orphan files' do
    let(:root) { Dir.mktmpdir }
    let(:service) { ActiveStorage::Service::DiskService.new(root: root) }
    let(:blob) { create_blob }

    before do
      allow(ActiveStorage::Blob.services).to receive(:fetch).and_call_original
      allow(ActiveStorage::Blob.services).to receive(:fetch).with(:avatars).and_return(service)
    end

    after { FileUtils.rm_rf(root) }

    def create_blob
      ActiveStorage::Blob.create_and_upload!(io: File.open(avatar_file), filename: 'avatar.png')
    end

    def write_file(path, age:)
      FileUtils.mkdir_p(File.dirname(path))
      File.write(path, 'x')
      FileUtils.touch(path, mtime: age.ago.to_time)
    end

    it 'removes old files and variant folders that no blob points to' do
      orphan = File.join(root, 'zz', 'zz', 'orphankey')
      orphan_variants = File.join(root, 'va', 'ri', 'variants', 'orphankey')
      known = File.join(root, blob.key[0..1], blob.key[2..3], blob.key)
      fresh_orphan = File.join(root, 'yy', 'yy', 'freshkey')
      write_file(orphan, age: 2.days)
      write_file(File.join(orphan_variants, 'thumb'), age: 2.days)
      FileUtils.touch(orphan_variants, mtime: 2.days.ago.to_time)
      write_file(known, age: 2.days)
      write_file(fresh_orphan, age: 1.hour)

      described_class.perform_now

      expect(File).not_to exist(orphan)
      expect(File).not_to exist(orphan_variants)
      expect(File).to exist(known)
      expect(File).to exist(fresh_orphan)
    end
  end
end

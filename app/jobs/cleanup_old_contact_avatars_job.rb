# OnlineSIM: every site visitor identified through the widget becomes a contact with its own avatar
# (plus resized variants), and self-hosted installs never delete old contacts, so the avatars storage
# only grows.
#
# - Contact avatars older than CONTACT_AVATAR_MAX_AGE_DAYS (default 90) are purged together with their
#   variants. The avatar sync markers are cleared as well; otherwise Avatar::AvatarFromUrlJob would skip
#   the same URL, and the next widget setUser or channel message downloads a fresh copy.
# - Files in the avatars storage that no blob points to (left by bulk deletes or failed purges) are removed.
class CleanupOldContactAvatarsJob < ApplicationJob
  queue_as :scheduled_jobs

  BATCH_SIZE = 500
  ORPHAN_MIN_AGE = 1.day
  SYNC_ATTRIBUTES = %w[avatar_url_hash last_avatar_sync_at].freeze

  def perform
    purge_old_avatars
    remove_orphan_files
  end

  private

  def purge_old_avatars
    old_avatars = ActiveStorage::Attachment.where(record_type: 'Contact', name: 'avatar', created_at: ...max_age.ago)

    old_avatars.includes(:record, :blob).find_each(batch_size: BATCH_SIZE) do |attachment|
      clear_sync_attributes(attachment.record)
      attachment.purge
    rescue StandardError => e
      Rails.logger.warn "CleanupOldContactAvatarsJob: failed to purge avatar attachment #{attachment.id}: #{e.message}"
    end
  end

  def clear_sync_attributes(contact)
    return if contact.blank?

    attributes = (contact.additional_attributes || {}).except(*SYNC_ATTRIBUTES)
    contact.update_columns(additional_attributes: attributes) # rubocop:disable Rails/SkipsModelValidations
  end

  # Disk layout: <root>/ab/cd/<key> for blobs, <root>/va/ri/variants/<key>/... for their variants
  def remove_orphan_files
    root = ActiveStorage::Blob.services.fetch(:avatars).root
    old_enough = ORPHAN_MIN_AGE.ago

    blob_files = Dir.glob(File.join(root, '??', '??', '*')).select { |path| File.file?(path) && File.mtime(path) < old_enough }
    variant_dirs = Dir.glob(File.join(root, 'va', 'ri', 'variants', '*')).select { |path| File.mtime(path) < old_enough }

    remove_without_blob(blob_files) { |path| File.delete(path) }
    remove_without_blob(variant_dirs) { |path| FileUtils.rm_rf(path) }
  end

  def remove_without_blob(paths, &)
    paths.each_slice(BATCH_SIZE) do |slice|
      known_keys = ActiveStorage::Blob.where(key: slice.map { |path| File.basename(path) }).pluck(:key).to_set
      slice.reject { |path| known_keys.include?(File.basename(path)) }.each(&)
    end
  end

  def max_age
    ENV.fetch('CONTACT_AVATAR_MAX_AGE_DAYS', 90).to_i.days
  end
end

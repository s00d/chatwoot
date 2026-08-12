class CleanupOldFilesJob < ApplicationJob
  queue_as :scheduled_jobs

  BATCH_SIZE = 100
  CLEANUP_DELAY = 5 # delay in seconds
  RETENTION_DAYS = 160

  def perform(*_args)
    expiration_date = RETENTION_DAYS.days.ago
    logger.info "CleanupOldFilesJob started. Looking for attachments older than #{expiration_date}."

    Attachment.where(created_at: ...expiration_date).find_in_batches(batch_size: BATCH_SIZE) do |attachments_batch|
      attachments_batch.each do |attachment|
        cleanup_attachment(attachment)
      end
    end

    logger.info "Waiting for #{CLEANUP_DELAY} seconds before cleaning up empty directories."
    sleep(CLEANUP_DELAY)

    cleanup_empty_directories
    logger.info 'CleanupOldFilesJob completed.'
  end

  private

  def cleanup_attachment(attachment)
    logger.info "Cleaning attachment: #{attachment.file.filename} (#{attachment.file.byte_size} bytes)"

    message = attachment.message
    return if message.blank?

    message.update!(content: 'This message has been auto cleanup', content_attributes: { deleted: true })
    message.attachments.destroy_all
  rescue StandardError => e
    logger.warn "Failed to process attachment ID #{attachment.id}: #{e.message}"
  end

  def cleanup_empty_directories
    storage_path = Rails.root.join('storage')

    Dir.glob("#{storage_path}/**/*").sort_by(&:length).reverse_each do |path|
      next unless File.directory?(path) && (Dir.entries(path) - %w[. ..]).empty?

      logger.info "Removing empty directory: #{path}"
      FileUtils.rmdir(path)
    end
  end

  def logger
    @logger ||= Rails.logger
  end
end

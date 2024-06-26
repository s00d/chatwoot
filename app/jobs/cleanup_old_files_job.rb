class CleanupOldFilesJob < ApplicationJob
  queue_as :default

  BATCH_SIZE = 100
  CLEANUP_DELAY = 5 # delay in seconds

  def perform(*_args)
    expiration_date = 160.days.ago
    logger.info "CleanupOldFilesJob started. Looking for attachments older than #{expiration_date}."

    Attachment.where('created_at < ?', expiration_date).find_in_batches(batch_size: BATCH_SIZE) do |attachments_batch|
      attachments_batch.each do |attachment|
        logger.info "Would delete file: #{attachment.file.filename} (#{attachment.file.byte_size} bytes)"

        # Update the associated message
        message = attachment.message
        message.update!(content: 'This message has been auto cleanup', content_attributes: { deleted: true })
        message.attachments.destroy_all
      end
    end

    # Adding a delay before cleaning up empty directories
    logger.info "Waiting for #{CLEANUP_DELAY} seconds before cleaning up empty directories."
    sleep(CLEANUP_DELAY)

    cleanup_empty_directories
    logger.info 'CleanupOldFilesJob completed.'
  end

  private

  def cleanup_empty_directories
    storage_path = Rails.root.join('storage')

    Dir.glob("#{storage_path}/**/*").sort_by(&:length).reverse_each do |path|
      if File.directory?(path) && (Dir.entries(path) - %w[ . .. ]).empty?
        logger.info "Removing empty directory: #{path}"
        FileUtils.rmdir(path)
      end
    end
  end

  def logger
    @logger ||= Rails.logger
  end
end

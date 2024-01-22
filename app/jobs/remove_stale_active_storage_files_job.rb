class RemoveStaleActiveStorageFilesJob < ApplicationJob
  queue_as :default

  def perform(*args)
    expiration_date = 6.months.ago
    logger.info "RemoveStaleActiveStorageFilesJob started. Looking for blobs older than #{expiration_date}."

    ActiveStorage::Blob.where('created_at <= ?', expiration_date).find_each do |blob|
      zero_file(blob)
    end

    logger.info 'RemoveStaleActiveStorageFilesJob completed.'
  end

  private
  def zero_file(blob)
    if ActiveStorage::Blob.service.respond_to?(:path_for)
      # Для локального хранилища
      file_path = ActiveStorage::Blob.service.path_for(blob.key)
      if File.exist?(file_path)
        logger.info "Zeroing file for blob: #{blob.filename} - #{file_path} (ID: #{blob.id})"
        File.delete(file_path)
      end
    else
      # Для удалённых хранилищ (например, Amazon S3)
      logger.error 'Cannot zero file for remote storage'
    end
  rescue ActiveStorage::FileNotFoundError => e
    logger.error "File not found for blob: #{blob.filename} (ID: #{blob.id}), Error: #{e.message}"
  rescue => e
    logger.error "Failed to zero file for blob: #{blob.filename} (ID: #{blob.id}), Error: #{e.message}"
  end

  def logger
    @logger ||= Rails.logger
  end
end

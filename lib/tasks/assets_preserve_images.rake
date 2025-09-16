# frozen_string_literal: true

# Task for preserving custom assets during asset compilation
# Solves the problem of deleting public/assets files when running assets:clobber

namespace :assets do
  desc "Preserve custom assets before asset cleanup"
  task preserve_images: :environment do
    assets_dir = Rails.root.join('public/assets')
    backup_dir = Rails.root.join('tmp/assets_backup')

    if Dir.exist?(assets_dir)
      Rails.logger.info "Preserving custom assets from #{assets_dir} to #{backup_dir}"

      # Create backup directory
      FileUtils.mkdir_p(backup_dir)

      # Copy all custom assets (excluding Rails-generated files)
      Dir.glob("#{assets_dir}/**/*").each do |file_path|
        next unless File.file?(file_path)

        # Skip Rails-generated files with digest hashes
        next if file_path.match?(/[a-f0-9]{64}\.(js|css|gz|br)$/)
        next if file_path.end_with?('.js.gz') || file_path.end_with?('.css.gz')
        next if file_path.end_with?('.js.br') || file_path.end_with?('.css.br')

        relative_path = Pathname.new(file_path).relative_path_from(assets_dir)
        target_path = backup_dir.join(relative_path)

        # Create necessary directories
        FileUtils.mkdir_p(target_path.dirname)

        # Copy file
        FileUtils.cp(file_path, target_path)

        Rails.logger.info "Preserved: #{relative_path}"
      end

      Rails.logger.info "Custom assets preserved in #{backup_dir}"
    else
      Rails.logger.info "Directory #{assets_dir} does not exist, skipping preservation"
    end
  end

  desc "Restore custom assets after asset compilation"
  task restore_images: :environment do
    assets_dir = Rails.root.join('public/assets')
    backup_dir = Rails.root.join('tmp/assets_backup')

    if Dir.exist?(backup_dir)
      Rails.logger.info "Restoring custom assets from #{backup_dir} to #{assets_dir}"

      # Create assets directory if it doesn't exist
      FileUtils.mkdir_p(assets_dir)

      # Copy assets back
      Dir.glob("#{backup_dir}/**/*").each do |file_path|
        next unless File.file?(file_path)

        relative_path = Pathname.new(file_path).relative_path_from(backup_dir)
        target_path = assets_dir.join(relative_path)

        # Create necessary directories
        FileUtils.mkdir_p(target_path.dirname)

        # Copy file
        FileUtils.cp(file_path, target_path)

        Rails.logger.info "Restored: #{relative_path}"
      end

      # Remove backup
      FileUtils.rm_rf(backup_dir)

      Rails.logger.info "Custom assets restored to #{assets_dir}"
    else
      Rails.logger.info "Asset backup not found in #{backup_dir}, skipping restoration"
    end
  end

  desc "Clean up asset backup"
  task cleanup_images_backup: :environment do
    backup_dir = Rails.root.join('tmp/assets_backup')

    if Dir.exist?(backup_dir)
      Rails.logger.info "Removing asset backup from #{backup_dir}"
      FileUtils.rm_rf(backup_dir)
      Rails.logger.info "Asset backup removed"
    end
  end
end

# Override standard tasks for automatic preservation/restoration
if Rake::Task.task_defined?('assets:clobber')
  Rake::Task['assets:clobber'].enhance(['assets:preserve_images'])
end

if Rake::Task.task_defined?('assets:precompile')
  Rake::Task['assets:precompile'].enhance(['assets:restore_images'])
end

# frozen_string_literal: true

# Alternative solution: moving images to app/assets/images
# for proper Rails Asset Pipeline handling

namespace :assets do
  desc "Move images from JavaScript directories to app/assets/images"
  task move_images_to_assets: :environment do
    js_images_dir = Rails.root.join('app/javascript')
    assets_images_dir = Rails.root.join('app/assets/images')

    # Create directory if it doesn't exist
    FileUtils.mkdir_p(assets_images_dir)

    # Find all images in JavaScript directories
    image_extensions = %w[*.png *.jpg *.jpeg *.gif *.svg *.ico *.webp]

    image_extensions.each do |ext|
      Dir.glob("#{js_images_dir}/**/#{ext}").each do |image_path|
        relative_path = Pathname.new(image_path).relative_path_from(js_images_dir)
        target_path = assets_images_dir.join(relative_path)

        # Create necessary directories
        FileUtils.mkdir_p(target_path.dirname)

        # Copy file
        FileUtils.cp(image_path, target_path)

        Rails.logger.info "Copied: #{image_path} -> #{target_path}"
      end
    end

    Rails.logger.info "Images moved to app/assets/images"
  end

  desc "Create symbolic links for images in public/assets/images"
  task create_image_symlinks: :environment do
    assets_images_dir = Rails.root.join('app/assets/images')
    public_images_dir = Rails.root.join('public/assets/images')

    if Dir.exist?(assets_images_dir)
      # Create directory if it doesn't exist
      FileUtils.mkdir_p(public_images_dir)

      # Create symbolic links
      Dir.glob("#{assets_images_dir}/**/*").each do |file_path|
        next unless File.file?(file_path)

        relative_path = Pathname.new(file_path).relative_path_from(assets_images_dir)
        target_path = public_images_dir.join(relative_path)

        # Create necessary directories
        FileUtils.mkdir_p(target_path.dirname)

        # Create symbolic link
        FileUtils.ln_sf(file_path, target_path)

        Rails.logger.info "Created link: #{target_path} -> #{file_path}"
      end

      Rails.logger.info "Symbolic links created"
    else
      Rails.logger.info "Directory app/assets/images does not exist"
    end
  end
end

# ref: https://github.com/rails/rails/issues/43906#issuecomment-1094380699
# https://github.com/rails/rails/issues/43906#issuecomment-1099992310
require 'fileutils'

task before_assets_precompile: :environment do
  # run a command which starts your packaging
  system('pnpm install') || raise('pnpm install failed')
  system('echo "-------------- Building SDK for Production --------------"')
  system('pnpm run build:sdk') || raise('pnpm run build:sdk failed')

  # OnlineSIM lite SDK (source in repo; minified artifact produced at build time — not committed)
  if File.exist?('public/lite_sdk.js')
    system('echo "-------------- Minifying lite_sdk.js --------------"')
    minify_ok = system(
      './node_modules/.bin/esbuild',
      'public/lite_sdk.js',
      '--minify',
      '--outfile=public/lite_sdk.min.js'
    )
    unless minify_ok
      warn 'esbuild minify failed; copying lite_sdk.js → lite_sdk.min.js'
      FileUtils.cp('public/lite_sdk.js', 'public/lite_sdk.min.js')
    end
  end

  system('echo "-------------- Building App for Production --------------"')
end

# every time you execute 'rake assets:precompile'
# run 'before_assets_precompile' first
Rake::Task['assets:precompile'].enhance %w[before_assets_precompile]

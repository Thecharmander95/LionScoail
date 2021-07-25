source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.0.2'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 6.1'
# Use postgresql as the database for Active Record
gem 'pg', '>= 0.18', '< 2.0'
# Use Puma as the app server
gem 'puma', '~> 4.3'
# Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
gem 'turbolinks', '~> 5'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.7'
# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development
# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap'

gem "actionview", ">= 6"

# Webpacker
gem 'webpacker', '~> 5.x'
gem 'cocoon', '~> 1.2.10'

# Background Stuff
gem "sidekiq"
gem 'redis'

# Html to Haml gem
gem 'html2haml'
gem 'haml-rails', '~> 2.0.1'

# Foundtion Gems
gem 'foundation-rails'
gem 'autoprefixer-rails'

gem 'friendly_id', '~> 5.2.4'

# devise gem
gem 'devise', '~> 4'

# Use ActiveStorage variant
gem 'mini_magick', '~> 4.8'
gem 'image_processing'
gem "aws-sdk-s3", require: false
gem 'fastimage'

gem 'hirb'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
end

group :development do
  # Access an interactive console on exception pages or by calling 'console' anywhere in the code.
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.2.1'
  # Better Chrash things
  gem 'better_errors'
  gem 'binding_of_caller'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :test do
  # Adds support for Capybara system testing and selenium driver
  gem 'capybara', '>= 2.15'
  gem 'selenium-webdriver'
  # Easy installation and use of chromedriver to run system tests with Chrome
  gem 'webdrivers'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
# gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

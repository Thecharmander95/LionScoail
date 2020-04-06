# Devise mailer
Rails.application.config.action_mailer.default_url_options = {
  host: ENV.fetch('DEFAULT_URL') { 'localhost:5000' }
}

# SMTP Mailer
ActionMailer::Base.smtp_settings = {
  user_name:            ENV["SENDGRID_USERNAME"],
  password:             ENV["SENDGRID_PASSWORD"],
  address:              ENV['SENDGRID_ADDRESS'],
  domain:               ENV['SENDGRID_DOMAIN'],
  port:                 ENV['SENDGRID_PORT'],
  authentication:       ENV['SENDGRID_AUTHENTICATION'],
  enable_starttls_auto: ENV['SMTP_ENABLE_STARTTLS_AUTO']
}

# Devise mailer
Rails.application.config.action_mailer.default_url_options = {
  host: ENV.fetch('DEFAULT_URL') { 'localhost:5000' }
}

# SMTP Mailer
ActionMailer::Base.smtp_settings = {
  :port           => ENV['MAILGUN_SMTP_PORT'],
  :address        => ENV['MAILGUN_SMTP_SERVER'],
  :user_name      => ENV['MAILGUN_SMTP_LOGIN'],
  :password       => ENV['MAILGUN_SMTP_PASSWORD'],
  :domain         => ENV['MAILGUN_DOMAIN'],
  :authentication => ENV['MAILGUN_AUTH']
}

ActionMailer::Base.delivery_method = :smtp

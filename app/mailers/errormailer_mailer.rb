class ErrormailerMailer < ApplicationMailer
  def error_email
    mail(to: User.find_by_role('admin').email, subject: 'A new error was found by a user.')
  end
end

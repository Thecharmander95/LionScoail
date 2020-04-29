class ErrormailerMailer < ApplicationMailer
  def error_email
    @url = "http://localhost:5000/errors"
    @url2 = "https://lionsocial.herokuapp.com/errors"
    mail(to: User.all.find_by_role('admin').email, subject: 'A new error was found by a user.')
  end
end

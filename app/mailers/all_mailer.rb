class AllMailer < ApplicationMailer
  def error_email
    @url = errors_url
    mail(to: User.all.find_by_role('admin').email, subject: 'A new error was found by a user.')
  end

  def newreport
    @url = badusers_url
    mail(to: User.all.find_by_role('admin').email, subject: 'A user was reported.')
  end

  def help
    mail(to: User.all.find_by_role("admin").email, subject: "Someone needs help!")
  end
end

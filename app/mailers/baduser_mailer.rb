class BaduserMailer < ApplicationMailer
  def newreport
    mail(to: User.find_by_role('admin').email, subject: 'A user was reported.')
  end
end

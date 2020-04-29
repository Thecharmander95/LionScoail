class BaduserMailer < ApplicationMailer
  def newreport
    @url = "http://localhost:5000/badusers"
    @url2 = "https://lionsocial.herokuapp.com/badusers"
    mail(to: User.all.find_by_role('admin').email, subject: 'A user was reported.')
  end

  def acindent
    @url = "http://localhost:5000/acindents"
    @url2 = "https://lionsocial.herokuapp.com/acindents"
    mail(to: User.all.find_by_role('admin').email, subject: "Someone thinks they were banned by acindent")
  end
end

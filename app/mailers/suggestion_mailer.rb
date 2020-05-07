class SuggestionMailer < ApplicationMailer
  def sg
    @url = "http://localhost:5000/suggestions"
    @url2 = "https://lionsocial.herokuapp.com/suggestions"
    mail(to: User.all.find_by_role('admin').email, subject: 'A new suggestions was suggested.')
  end
end

class UserMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.user_mailer.welcome.subject
  #
  def welcome(resource)
    @resource = resource
    @user = @resource.username
    mail to: @resource.email
  end

  def change(user)
    @person = user
    @user = @person.username

    mail to: @person.email
  end
end

class AdminsController < ApplicationController
  def usersettings
    @users = User.all
    @conversations = Conversation.all
  end
end

class AdminsController < ApplicationController
  def usersettings
    @users = User.all
    @conversations = Conversation.all
    @rooms = Room.all
  end
end

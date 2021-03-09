class AdminsController < ApplicationController
  before_action :check_admin

  def usersettings
    @users = User.all
    @conversations = Conversation.all
    @rooms = Room.all
  end

  def disablefeatures
    @disables = Disable.all
  end

end

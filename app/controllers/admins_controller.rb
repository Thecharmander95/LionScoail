class AdminsController < ApplicationController
  before_action :set_everything
  before_action :check_admin

  def usersettings
  end

  private
    def set_everything
      @users = User.all
      @conversations = Conversation.all
    end
end

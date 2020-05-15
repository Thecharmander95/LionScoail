class AdminsController < ApplicationController
  before_action :set_user
  before_action :configure_admin

  def usersettings
  end

  private
    def set_user
      @users = User.all
    end
end

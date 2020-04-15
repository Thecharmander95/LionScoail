class SitesController < ApplicationController

  def home
  end

  def set
    @something = 'leo'
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
      redirect_to root_path, notice: "User deleted."
  end

  def usersettings
  end
end

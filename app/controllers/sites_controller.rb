class SitesController < ApplicationController
  
  def home
  end

  def about
  end

  def set
    @something = 'leo'
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
      redirect_to posts_index_path, notice: "User deleted."
  end

  def usersettings
  end

end

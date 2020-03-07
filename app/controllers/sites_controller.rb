class SitesController < ApplicationController
  before_action :set, except: [:home]
  before_action :is_logged_in?, only: [:home]

  def home
  end

  def about
  end

  def set
    @something = 'leo'
  end

  def is_logged_in?
    if user_signed_in?
      redirect_to posts_path
    end
  end

  def admin
  end

  def adminview

  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
      redirect_to posts_index_path, notice: "User deleted."
  end
end

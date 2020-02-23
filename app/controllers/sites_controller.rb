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
end

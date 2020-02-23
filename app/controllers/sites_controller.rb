class SitesController < ApplicationController
   before_action :set, except: [:home]
  def home
  end

  def about
  end

  def set
    @something = 'leo'
  end
end

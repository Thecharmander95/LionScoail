class SitesController < ApplicationController

  def home
    @page_title = "Home Lion Socail"
  end

  def set
    @something = 'leo'
  end
end

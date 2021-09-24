class HomesController < ApplicationController
  before_action :sitedisable_check
  before_action :lionnav_disable

  def index
    @page_title = "Home Lion social"
  end

end

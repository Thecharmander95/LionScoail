class HomesController < ApplicationController
  before_action :sitedisable_check

  def index
    @page_title = "Home Lion social"
  end

end

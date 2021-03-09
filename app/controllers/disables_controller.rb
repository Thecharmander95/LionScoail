class DisablesController < ApplicationController
  def index
  end
  private
    def user_params
      params.require(:disables).permit(:postdisable, :conversationdisable, :articledisable, :chatroomdisable, :storydisable)
    end
end

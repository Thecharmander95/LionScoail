class SuggestionsController < ApplicationController
  before_action :set_sg, only: [:destroy]
  before_action :check_admin, only: [:index, :destroy]

  def new
    @sg = Suggestion.new
  end

  def create
    @sg = current_user.suggestions.new(sg_params)
    if @sg.save
      flash[:notice] = "The suggestion was reported! Thank you #{current_user.username}!"
      redirect_to root_path
      AllMailer.sg.deliver_now
    else
      render 'new'
    end
  end

  def index
    @sgs = Suggestion.all
  end

  def destroy
    @sg.destroy
    flash[:notice] = "Suggestion was deleted"
    redirect_to suggestions_path
  end

 private
   def set_sg
     @sg = Suggestion.find(params[:id])
   end

   def sg_params
     params.require(:suggestion).permit(:name)
   end
end

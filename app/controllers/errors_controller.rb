class ErrorsController < ApplicationController
  before_action :set_error, only: [:show, :destroy]

  def new
    @error = Error.new
  end

  def create
    @error = Error.new(error_params)
    if @error.save
      flash[:notice] = "Error was successfully reported. We will review it and fix this error #{current_user.username}."
      redirect_to root_path
    else
      render 'new'
    end
  end

 def show
 end

 def index
   @errors = Error.all
   @errors = Error.by_newest
 end

 def destroy
   @error.errors.destroy
   flash[:notice] = "Error was deleted"
  end

 private
  def set_error
    @article = Error.find(params[:id])
  end

  def error_params
    params.require(:error).permit(:error, :description)
  end

end

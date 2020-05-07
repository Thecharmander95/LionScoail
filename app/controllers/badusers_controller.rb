class BadusersController < ApplicationController
  before_action :set_bad, only: [:destroy]

  def new
    @bad = Baduser.new
  end

  def create
    @bad = Baduser.new(baduser_params)
    if @bad.save
      flash[:notice] = "The user was successfully reported. We will decide if we would block them #{current_user.username}."
      redirect_to root_path
      AllMailer.newreport.deliver_now
    else
      render 'new'
    end
  end

 def index
   @bads = Baduser.all
   @bads = Baduser.by_newest
 end

 def destroy
   @bad.destroy
   flash[:notice] = "The report was deleted"
   redirect_to root_path
 end

 private
  def set_bad
    @bad = Baduser.find(params[:id])
  end

  def baduser_params
    params.require(:baduser).permit(:user, :what)
  end

end

class AcindentsController < ApplicationController
  before_action :set_bad, only: [:destroy]
  before_action :configure_admin, only: [:index, :destroy]

  def new
    @bad = Acindent.new
  end

  def create
    @bad = Acindent.new(baduser_params)
    if @bad.save
      flash[:notice] = "The email was successfully sent. We will decide if we would unblock you #{current_user.username}."
      redirect_to root_path
      AllMailer.acindent.deliver_now
    else
      render 'new'
    end
  end

 def index
   @bads = Acindent.all
   @bads = Acindent.by_newest
 end

 def destroy
   @bad.destroy
   flash[:notice] = "The report was deleted"
   redirect_to root_path
 end

 private
  def set_bad
    @bad = Acindent.find(params[:id])
  end

  def baduser_params
    params.require(:acindent).permit(:username, :explain)
  end
end

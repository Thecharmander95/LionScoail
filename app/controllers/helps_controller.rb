class HelpsController < ApplicationController
  before_action :set_help, only: [:edit, :update, :destroy]
  before_action :configure_admin, only: [:index, :destroy]

  def new
    @help = Help.new
  end

  def create
    @help = Help.new(help_params)
    if @help.save
      flash[:notice] = "What you needed help with is being sent to us."
      redirect_to root_path
      AllMailer.help.deliver_now
    else
      render 'new'
    end
  end

  def edit
  end

  def update
    if @help.update(help_params)
     flash[:notice] = "About page was updated"
     redirect_to root_path
    else
     flash[:notice] = "About page was not updated"
     render 'edit'
    end
  end

  def index
    @helps = Help.all
  end

  def destroy
    @help.destroy
    flash[:notice] = "Thank you for helping that user."
    redirect_to root_path
  end

  private

    def set_help
      @help = Help.find(params[:id])
    end

    def help_params
      params.require(:help).permit(:email, :number, :with)
    end
end

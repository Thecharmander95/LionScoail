class AboutsController < ApplicationController
  before_action :sitedisable_check
  before_action :set_labout, only: [:edit, :update, :destroy]
  before_action :check_admin, only: [:new, :destroy, :edit]

  def new
    @labout = About.new
  end

  def create
    @labout = About.new(about_params)
    if @labout.save
      flash[:notice] = "About page was successfully created"
      redirect_to abouts_path
    else
      render 'new'
    end
  end

  def edit
  end

  def update
    if @labout.update(about_params)
     flash[:notice] = "About page was updated"
     redirect_to abouts_path
    else
     flash[:notice] = "About page was not updated"
     render 'edit'
    end
  end

  def index
    @page_title = "About Lion social"
    @labouts = About.all
  end

  def destroy
    @labout.destroy
    flash[:notice] = "About page was deleted"
    redirect_to abouts_path
  end

  private

    def set_labout
      @labout = About.find(params[:id])
    end

    def labout_params
      params.require(:about).permit(:title, :ltoppara, :lchange, :llist1, :llist2, :llist3, :lbuttum, :llinkgithub, :lgithubtitle)
    end
end

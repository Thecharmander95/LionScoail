class AboutsController < ApplicationController
  before_action :sitedisable_check
  before_action :set_about, only: [:edit, :update, :destroy]
  before_action :check_admin, only: [:new, :destroy, :edit]

  def new
    @about = About.new
  end

  def create
    @about = About.new(about_params)
    if @about.save
      flash[:notice] = "About page was successfully created"
      redirect_to abouts_path
    else
      render 'new'
    end
  end

  def edit
  end

  def update
    if @about.update(about_params)
     flash[:notice] = "About page was updated"
     redirect_to abouts_path
    else
     flash[:notice] = "About page was not updated"
     render 'edit'
    end
  end

  def index
    @page_title = "About Lion social"
    @abouts = About.all
  end

  def destroy
    @about.destroy
    flash[:notice] = "About page was deleted"
    redirect_to abouts_path
  end

  private

    def set_about
      @about = About.find(params[:id])
    end

    def about_params
      params.require(:about).permit(:title, :ltoppara, :lchange, :llist1, :llist2, :llist3, :lbuttum, :llinkgithub, :lgithubtitle)
    end
end

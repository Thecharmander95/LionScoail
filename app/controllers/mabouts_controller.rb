class MaboutsController < ApplicationController
  before_action :set_about, only: [:edit, :update, :destroy]

  def new
    @about = Mabout.new
  end

  def create
    @about = Mabout.new(about_params)
    if @about.save
      flash[:notice] = "About page was successfully created"
      redirect_to mabouts_path
    else
      render 'new'
    end
  end

  def edit
  end

  def update
    if @about.update(about_params)
     flash[:notice] = "About page was updated"
     redirect_to mabout_path(@about)
    else
     flash[:notice] = "About page was not updated"
     render 'edit'
    end
  end

  def index
    @abouts = Mabout.all
  end

  def destroy
    @about.destroy
    flash[:notice] = "About page was deleted"
    redirect_to mabouts_path
  end

  private

    def set_about
      @about = Mabout.find(params[:id])
    end

    def about_params
      params.require(:mabout).permit(:title, :toppara, :change, :list1, :list2, :list3, :butto, :linkgithub, :githubtitlem)
    end
end

class DissaperingpostsController < ApplicationController
  before_action :set_dp, only: [:show, :destroy]

  def new
    @dp = current_user.dissaperingposts.new
  end

  def create
    @dp = current_user.dissaperingposts.new(dp_params)
    if @dp.save
      flash[:notice] = "Story was successfully created"
      redirect_to dissaperingposts_path
    else
      render 'new'
    end
  end

  def show
  end

  def index
    @dps = Dissaperingpost.by_newest
    @user = current_user
    @dp = current_user.dissaperingposts.new
  end

  def destroy
    @dp.destroy
    flash[:notice] = "Article was deleted"
    redirect_to dissaperingposts_path
    @dp.recent
  end

  private
  def set_dp
    @dp = Dissaperingpost.find(params[:id])
  end

  def dp_params
    params.require(:dissaperingpost).permit(:content)
    params.require(:dissaperingpost).permit(:content, :picture)
  end
end

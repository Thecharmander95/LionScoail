class UsersController < ApplicationController
before_action :set_user, only: [:show, :edit, :update, :destroy]

  def index
    @users = User.all
    @users = User.by_newest

  end

  def destroy
    @user.destroy
    redirect_to root_path, notice: 'User deleted.'
  end

  def show
    @posts = @user.posts
    @posts = Post.by_newest
    @user  = User.find(params[:id])
    @articles = @user.articles

  end

  def edit
  end

  def update
    @user.avatar.attach(user_params[:avatar]) if user_params[:avatar].present?

    respond_to do |format|
      if @user.update(user_params)
        format.html { redirect_to root_path, notice: 'User was successfully updated.' }
        format.json { render :index, status: :ok, location: @user }
      else
        format.html { render :edit }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  def following
    @title = "Following"
    @user  = User.find(params[:id])
    @users = @user.following
    render 'show_follow'
  end

  def followers
    @title = "Followers"
    @user  = User.find(params[:id])
    @users = @user.followers
    render 'show_follow'
  end


  private

    def set_user
      @user = User.find(params[:id])
    end

    def user_params
      params.require(:user).permit(:body, :avatar)
    end
 end

class UsersController < ApplicationController
   def index
     @users = User.all
   end

   def destroy
     @user = User.find(params[:id])
     @user.destroy
     redirect_to root_path, notice: 'User deleted.'
   end

   def show
     @user = User.find(params[:id])
     @posts = @user.posts 
   end
 end

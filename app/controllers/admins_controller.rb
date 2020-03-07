class AdminsController < ApplicationController
   def index
     @admin = Admin.all
   end

   def destroy
     @admin = Admin.find(params[:id])
     @admin.destroy
     redirect_to root_path, notice: 'Admin deleted.'
   end

   def show
     @admin = Admin.find(params[:id])
   end

 end

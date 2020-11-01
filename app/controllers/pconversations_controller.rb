class PconversationsController < ApplicationController
  before_action :check_brosis
  def index
    @page_title = "Conversations Brosis"
    @users = User.where.not(id: current_user.id)
    @pconversations = Pconversation.where("sender_id = ? OR receiver_id = ?", current_user.id, current_user.id)
  end

  def create
    if Pconversation.between(params[:sender_id], params[:receiver_id]).present?
      @pconversation = Pconversation.between(params[:sender_id], params[:receiver_id]).first
    else
      @pconversation = Pconversation.create!(pconversation_params)
    end

    redirect_to pconversation_pmessages_path(@pconversation)
  end

  def destroy
    @pconversation = Pconversation.find(params[:id])
    @pconversation.destroy
    if current_user.role == "admin"
      redirect_to admin_path
    else
      redirect_to pconversations_path
    end
  end

  private
    def pconversation_params
      params.permit(:sender_id, :receiver_id)
    end
end

class ConversationsController < ApplicationController
  before_action :authenticate_user!
  before_action :sitedisable_check
  before_action :conversationdisable_check

  def index
    @page_title = "Conversations Lion social"
    @users = User.where.not(id: current_user.id)
    @conversations = Conversation.where("sender_id = ? OR receiver_id = ?", current_user.id, current_user.id)
  end

  def create
    if Conversation.between(params[:sender_id], params[:receiver_id]).present?
      @conversation = Conversation.between(params[:sender_id], params[:receiver_id]).first
    else
      @conversation = Conversation.create!(conversation_params)
    end

    redirect_to conversation_messages_path(@conversation)
  end

  def update
    @conversation = Conversation.find(params[:id])
    respond_to do |format|
      if @conversation.update(conversation_params)
        format.html { redirect_to conversations_path, notice: 'Conversation was successfully deleted.' }
        format.json { render :index, status: :ok, location: @conversation }
      else
        format.html { render :edit }
        format.json { render json: @conversation.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @conversation = Conversation.find(params[:id])
    @conversation.delete
    redirect_to admin_conversation_path
  end

  private
    def conversation_params
      params.permit(:sender_id, :receiver_id)
    end
end

class RoomMessagesController < ApplicationController
  before_action :load_entities

  def create
    @room_message = @room.room_messages.build(room_message_params)
    @room_message.user = current_user
    @room_messages = @room.room_messages
    respond_to do |format|
      if @room_message.save
        format.html { redirect_to @room, notice: 'Room was successfully created.' }
        format.json { render :show, status: :created, location: @room }
        format.js
      else
        format.html { render @room }
        format.json { render json: @room.errors, status: :unprocessable_entity }
      end
    end
  end

  protected

  def load_entities
    @room = Room.find params[:room_id]
  end

  def room_message_params
    params.require(:room_message).permit(:message)
  end
end

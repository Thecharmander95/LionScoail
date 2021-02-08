class RoomMessagesController < ApplicationController
  before_action :load_entities

  def create
    @room_message = @room.room_messages.build(room_message_params)
    @room_message.user = current_user
    @room_messages = @room.room_messages
    respond_to do |format|
      if @room_message.save
        ActionCable.server.broadcast("room_channel", {
        username: @room_message.user.username,
        message: @room_message.message,
        room: @room.id
        })

        format.html { redirect_to @room }
        format.js
      else
        format.html { render @room }
      end
    end
  end

  protected

  def load_entities
    @room = Room.find(params[:room_id])
  end

  def room_message_params
    params.require(:room_message).permit(:message)
  end
end

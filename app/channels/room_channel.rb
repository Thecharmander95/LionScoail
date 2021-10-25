class RoomChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_from "room_channel"
  end

  def unsubscribed
    stop_from "room_channel"
  end
end

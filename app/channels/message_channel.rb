class MessageChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_from "message_channel"
  end

  def unsubscribed
    stop_from "message_channel"
  end
end

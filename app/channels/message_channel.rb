class MessageChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_from "message_channel"
    current_user.appear
  end

  def unsubscribed
      current_user.disappear
  end
end

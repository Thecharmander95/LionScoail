class RoomdisplayChannel < ApplicationCable::Channel
  def subscribed
    stream_from "roomdisplay_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
    stop_from "roomdisplay_channel"
  end
end

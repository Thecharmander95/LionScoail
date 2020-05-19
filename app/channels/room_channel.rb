class RoomChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_from "room_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
    room = Room.find(params[:room_id])

    # Remove the current user from the list
    redis.lrem(key_for(room.id), 1, current_user.id)
  end

  private

  def redis
    @redis ||= ::Redis.new( url: ENV['REDIS_URL'] )
  end
end

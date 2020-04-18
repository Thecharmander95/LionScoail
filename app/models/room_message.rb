class RoomMessage < ApplicationRecord
  belongs_to :room, inverse_of: :room_messages
  belongs_to :user
  
  scope :by_newest, -> { self.order(created_at: :desc) }
end

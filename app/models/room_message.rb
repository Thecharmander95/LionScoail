class RoomMessage < ApplicationRecord
  establish_connection(:users)
  belongs_to :room, inverse_of: :room_messages
  belongs_to :user
  validates :message, presence:true, length: { minimum:1}

  scope :by_newest, -> { self.order(created_at: :desc) }
end

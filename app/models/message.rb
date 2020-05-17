class Message < ApplicationRecord
  belongs_to :conversation
  belongs_to :user

  validates_presence_of :body, :conversation_id, :user_id

  scope :by_newest, -> { self.order(created_at: :desc) }

  private
    def message_time
      created_at.strftime("%d/%m/%y at %l:%M %p")
    end
end

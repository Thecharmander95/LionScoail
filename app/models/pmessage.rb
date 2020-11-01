class Pmessage < ApplicationRecord
  belongs_to :pconversation
  belongs_to :user

  validates_presence_of :body, :pconversation_id, :user_id

  scope :by_newest, -> { self.order(created_at: :desc) }

  private
    def pmessage_time
      created_at.strftime("%d/%m/%y at %l:%M %p")
    end
end

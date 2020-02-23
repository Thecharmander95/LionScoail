class Post < ApplicationRecord
  belongs_to :user

   scope :by_newest, -> { self.order(created_at: :desc) }
end

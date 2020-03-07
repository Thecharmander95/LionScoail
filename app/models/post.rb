class Post < ApplicationRecord
  belongs_to :user
  has_many :comments

  scope :by_newest, -> { self.order(created_at: :desc) }
end

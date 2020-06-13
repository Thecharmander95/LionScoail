class Post < ApplicationRecord
  belongs_to :user
  has_many :comments

  has_one_attached :picture
  has_one_attached :video

  scope :by_newest, -> { self.order(created_at: :desc) }
end

class Story < ApplicationRecord
  belongs_to :user

  has_one_attached :picture

  scope :by_newest, -> { self.order(created_at: :desc) }
  scope :of_followed_users, -> (following_users) { where user_id: following_users }
  scope :recent, -> { where('created_at >= :one_day_ago', one_day_ago: Time.now - 1.day) }
end

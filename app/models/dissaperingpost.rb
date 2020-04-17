class Dissaperingpost < ApplicationRecord
  belongs_to :user

  has_one_attached :picture

  # Scopes
  scope :by_newest, -> { self.order(created_at: :desc) }
  scope :recent, -> { where('created_at >= :one_day_ago', one_day_ago: Time.now - 1.day) }
end

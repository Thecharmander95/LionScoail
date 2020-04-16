class Dissaperingposts < ApplicationRecord
  belongs_to :user

  has_one_attached :picture

  # Scopes
  scope :recent, -> { where('created_at >= :thirty_days_ago', one_days_ago: Time.now - 1.days).destroy_all }
end

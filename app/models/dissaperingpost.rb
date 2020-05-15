class Dissaperingpost < ApplicationRecord
  belongs_to :user

  has_one_attached :picture

  # Scopes
  scope :by_newest, -> { self.order(created_at: :desc) }
  scope :recent, -> { where('created_at >= :twentyfour_hours_ago', twentyfour_hours_ago: Time.now - 24.hours) }
end

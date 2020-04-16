class Storie < ApplicationRecord
  belongs_to :user

  has_one_attached :picture

  # Scopes
  scope :recent, -> { where('created_at >= :thirty_days_ago', one_days_ago: Time.now - 1.days).destroy_all }
  scope :by_newest, -> { self.order(created_at: :desc) }

end

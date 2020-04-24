class Error < ApplicationRecord
  scope :by_newest, -> { self.order(created_at: :desc) }
end

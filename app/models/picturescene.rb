class Picturescene < ApplicationRecord
  establish_connection (:users)
  validates :name, length: { minimum: 1}

  belongs_to :movie

  has_one_attached :picture
end

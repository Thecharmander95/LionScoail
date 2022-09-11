class Scene < ApplicationRecord
  establish_connection (:users)
  validates :name, length: { minimum: 3}
  validates :content, length: { minimum: 2}

  belongs_to :movie
end

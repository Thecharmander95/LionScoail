class Credit < ApplicationRecord
  establish_connection (:users)
  belongs_to :movie
end

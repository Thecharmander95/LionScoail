class Suggestion < ApplicationRecord
  establish_connection(:users)
  belongs_to :user
end

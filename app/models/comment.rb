class Comment < ApplicationRecord
  establish_connection(:users)

  belongs_to :post
  belongs_to :user
end

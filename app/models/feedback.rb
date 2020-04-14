class Feedback < ApplicationRecord
  belongs_to :article
  belongs_to :user

end

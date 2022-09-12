class Payment < ApplicationRecord
    belongs_to :user
    has_many :expenses  
    validates :option, presence: true, length: { minimum: 4}
    validates :amount, presence: true, length: { minimum: 1}
    validates :info, presence: true, length: { minimum: 2}
end

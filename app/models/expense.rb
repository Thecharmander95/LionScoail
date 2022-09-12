class Expense < ApplicationRecord
    belongs_to :payments

    validates :title, presence: true, length: { minimum: 4}
    validates :amount, presence: true, length: { minimum: 1}
    validates :time, presence: true, length: { minimum: 8}

    def self.find_by_time(time)
        where('time LIKE ?', "#{time}%").order('time ASC')
    end

end

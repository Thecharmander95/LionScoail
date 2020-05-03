class Room < ApplicationRecord
  has_many :room_messages, dependent: :destroy, inverse_of: :room

  def self.find_by_first_letter(letter)
   where('name LIKE ?', "#{letter}%").order('title ASC')
  end
end

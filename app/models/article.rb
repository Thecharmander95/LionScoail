class Article < ActiveRecord::Base
  validates :title, presence: true, length: { minimum: 3, maximum: 50}
  validates :description, presence: true, length: { minimum: 10, maximum: 300 }
  validates :content, presence:true, length: { minimum:50}
  validates :articleused, presence:true, length: { minimum:2}

  belongs_to :user
  has_many :feedbacks

  def self.find_by_first_letter(letter)
   where('title LIKE ?', "#{letter}%").order('title ASC')
  end

  extend FriendlyId
  friendly_id :title, use: :slugged

end

class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_one_attached :avatar, dependent: :destroy

  validates :username, uniqueness: true, length: { minimum:1}

  extend FriendlyId
  friendly_id :username, use: :slugged

end

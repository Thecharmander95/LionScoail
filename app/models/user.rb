class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  # Following and Unfollowing
  has_many :active_relationships, class_name:  "Relationship", foreign_key: "follower_id", dependent: :destroy
  has_many :passive_relationships, class_name:  "Relationship", foreign_key: "followed_id", dependent: :destroy
  has_many :following, through: :active_relationships, source: :followed
  has_many :followers, through: :passive_relationships, source: :follower

  has_many :posts, dependent: :destroy
  has_many :comments, dependent: :destroy
  has_many :articles, dependent: :destroy
  has_many :dissaperingposts, dependent: :destroy
  has_many :suggestions, dependent: :destroy

  has_one_attached :avatar

  validates :username, uniqueness: true, length: { minimum:1}

  scope :by_newest, -> { self.order(created_at: :desc) }


  def follow(other_user)
    following << other_user
  end

  # Unfollows a user.
  def unfollow(other_user)
    following.delete(other_user)
  end

  # Returns true if the current user is following the other user.
  def following?(other_user)
    following.include?(other_user)
  end

  def feed
   following_ids = "SELECT followed_id FROM relationships
                    WHERE  follower_id = :user_id"
   Post.where("user_id IN (#{following_ids})
                    OR user_id = :user_id", user_id: id)
 end

end

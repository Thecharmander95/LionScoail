class AdminsController < ApplicationController
  before_action :check_admin
  def index
  end

  def users
    @users = User.all
  end

  def rooms
    @rooms = Room.all
  end

  def conversations
    @conversations = Conversation.all
  end

  def posts
    @posts = Post.all
  end

end

module ApplicationHelper
  include DisablesHelper
  include UsersHelper
  include ConversationsHelper
  include ArticlesHelper
  include PostsHelper

  def check_admin
    if user_signed_in?
      if current_user.role == "admin"
      else
        redirect_to root_path, notice: "You do not have access to this"
      end
    else
      redirect_to root_path, notice: "You do not have access to this"
    end
  end

end

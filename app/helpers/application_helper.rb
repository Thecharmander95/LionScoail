module ApplicationHelper

  def check_admin
    if current_user.role == "admin"
    else
      redirect_to root_path, notice: "You do not have access to this"
    end
  end
end

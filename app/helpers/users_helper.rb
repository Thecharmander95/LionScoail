module UsersHelper
  def current_user?(user)
    user == current_user
  end

  def configure_user
    @user = User.friendly.find(params[:id])
    if current_user == @user
    else
      redirect_to root_path, notice: "Your not that user"
    end
  end

end

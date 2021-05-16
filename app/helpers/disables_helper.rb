module DisablesHelper
  def postdisable_check
    if Disable.first.postdisable == "yes"
      redirect_to disables_path
    else
    end
  end

  def conversationdisable_check
    if Disable.first.conversationdisable == "yes"
      redirect_to disables_path
    else
    end
  end

  def chatroomdisable_check
    if Disable.first.chatroomdisable == "yes"
      redirect_to disables_path
    else
    end
  end

  def sitedisable_check
    if Disable.first.homedisable == "yes"
      if user_signed_in?
        if current_user.role == "admin"
        else
          redirect_to disables_path
        end
      else
        redirect_to disables_path
      end
    end
  end
end

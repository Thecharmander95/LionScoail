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

  def articledisable_check
    if Disable.first.articledisable == "yes"
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

  def storydisable_check
    if Disable.first.storydisable == "yes"
      redirect_to disables_path
    else
    end
  end
end

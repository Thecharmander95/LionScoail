class PmessagesController < ApplicationController
  before_action :check_brosis

  before_action do
    @pconversation = Pconversation.find(params[:pconversation_id])
  end

  def index
    @page_title = "Messages Brosis Lion Socail"
    @pmessages = @pconversation.pmessages

    @pmessages.where("user_id != ? AND read = ?", current_user.id, false).update_all(read: true)

    @pmessage = @pconversation.pmessages.new
    @pmessages = @pmessages.by_newest
    @pconversations = Pconversation.where("sender_id = ? OR receiver_id = ?", current_user.id, current_user.id)
  end

  def create
    @pmessage = @pconversation.pmessages.new(pmessage_params)
    @pmessage.user = current_user

    if @pmessage.save
      ActionCable.server.broadcast "pmessage_channel",
      username: @pmessage.user.username,
      pconversation: @pconversation.id,
      pmessage: @pmessage.body

      redirect_to pconversation_pmessages_path(@pconversation)
    end
  end

  private
    def pmessage_params
      params.require(:pmessage).permit(:body, :user_id)
    end
end

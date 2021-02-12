class StoriesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_story, only: [:destroy]

  def index
    @page_title = "Stories Lion Socail"
    @storys = Story.of_followed_users(current_user.following).by_newest
    @story = current_user.stories.new
    @user = current_user
  end

  def create
    @story = current_user.stories.new(story_params)
    respond_to do |format|
      if @story.save
        format.html { redirect_to stories_path, notice: 'Your story was successfully posted. If your a little concerend why its not showing its because you can only see stories form people you follow.' }
        format.json { render :index, status: :created, location: @story }
      else
        format.html { render :new }
        format.json { render json: @story.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @story.destroy
    respond_to do |format|
      format.html { redirect_to stories_url, notice: 'Story was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    def set_story
      @story = Story.find(params[:id])
    end

    def story_params
      params.require(:story).permit(:content, :picture)
    end
end

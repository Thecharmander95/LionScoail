class DissaperingpostsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_dp, only: [:show, :edit, :update, :destroy]

  # GET /posts
  # GET /posts.json
  def index
    @dps = Dissaperingpost.all
    @dp = current_user.dissaperingposts.new
    @user = current_user
  end

  # GET /posts/1
  # GET /posts/1.json
  def show
  end

  # GET /posts/new
  def new
    @dp = current_user.storys.new
  end

  # GET /posts/1/edit
  def edit
  end

  # POST /posts
  # POST /posts.json
  def create
    @story = current_user.storys.new(story_params)
    respond_to do |format|
      if @story.save
        format.html { redirect_to storys_path, notice: 'Story was successfully created.' }
        format.json { render :index, status: :created, location: @story }
      else
        format.html { render :new }
        format.json { render json: @story.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /posts/1
  # PATCH/PUT /posts/1.json
  def update
    @story.picture.attach(story_params[:picture]) if story_params[:picture].present?
    respond_to do |format|
      if @story.update(story_params)
        format.html { redirect_to storys_path, notice: 'Story was successfully updated.' }
        format.json { render :index, status: :ok, location: @story }
      else
        format.html { render :edit }
        format.json { render json: @story.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /posts/1
  # DELETE /posts/1.json
  def destroy
    @story.destroy
    respond_to do |format|
      format.html { redirect_to storys_url, notice: 'Story was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_story
      @story = Story.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def story_params
      params.require(:story).permit(:content)
      params.require(:story).permit(:content, :picture)
    end
end

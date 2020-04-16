class StoriesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_storie, only: [:show, :edit, :update, :destroy]

  # GET /posts
  # GET /posts.json
  def index
    @stories = Storie.by_newest
    @storie = current_user.stories.new
    @user = current_user
  end

  # GET /posts/1
  # GET /posts/1.json
  def show
  end

  # GET /posts/new
  def new
    @storie = current_user.stories.new
  end

  # GET /posts/1/edit
  def edit
  end

  # POST /posts
  # POST /posts.json
  def create
    @storie = current_user.stories.new(storie_params)
    respond_to do |format|
      if @storie.save
        format.html { redirect_to stories_path, notice: 'Storie was successfully created.' }
        format.json { render :index, status: :created, location: @storie }
      else
        format.html { render :new }
        format.json { render json: @storie.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /posts/1
  # PATCH/PUT /posts/1.json
  def update
    @storie.picture.attach(storie_params[:picture]) if storie_params[:picture].present?
    respond_to do |format|
      if @storie.update(storie_params)
        format.html { redirect_to stories_path, notice: 'Storie was successfully updated.' }
        format.json { render :index, status: :ok, location: @storie }
      else
        format.html { render :edit }
        format.json { render json: @storie.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /posts/1
  # DELETE /posts/1.json
  def destroy
    @storie.destroy
    respond_to do |format|
      format.html { redirect_to stories_url, notice: 'Storie was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_storie
      @storie = Storie.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def storie_params
      params.require(:storie).permit(:content)
      params.require(:storie).permit(:content, :picture)
    end
end

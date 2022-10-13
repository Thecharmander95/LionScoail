class ScenesController < ApplicationController
  before_action :set_movie
  before_action :set_scene, only: [:edit, :update, :destroy]

  # GET /scenes
  # GET /scenes.json
  def index
    @scenes = Scene.all
  end

  # GET /scenes/new
  def new
    @scene = @movie.scenes.new
  end

  # GET /scenes/1/edit
  def edit
  end

  # POST /scenes
  # POST /scenes.json
  def create
    @scene = @movie.scenes.new(scene_params)

    respond_to do |format|
      if @scene.save
        format.html { redirect_to movie_path(@movie), notice: 'Scene was successfully created.' }
        format.json { render :show, status: :created, location: @scene }
      else
        format.html { render :new }
        format.json { render json: @scene.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /scenes/1
  # PATCH/PUT /scenes/1.json
  def update
    respond_to do |format|
      if @scene.update(scene_params)
        format.html { redirect_to @movie, notice: 'Scene was successfully updated.' }
        format.json { render :show, status: :ok, location: @scene }
      else
        format.html { render :edit }
        format.json { render json: @scene.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /scenes/1
  # DELETE /scenes/1.json
  def destroy
    @scene.destroy
    respond_to do |format|
      format.html { redirect_to movie_url(@movie), notice: 'Scene was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_movie
      @movie = current_user.movies.find(params[:movie_id])
    end

    def set_scene
      @scene = @movie.scenes.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def scene_params
      params.require(:scene).permit(:name, :content, :actor)
    end
end

class PicturescenesController < ApplicationController
  before_action :set_movie, excpet: [:destroy]
  before_action :set_picturescene, only: [:show, :destroy]

  def index
    @picturescenes = Picturescene.all
  end

  def new
    @picturescene = @movie.picturescenes.new
  end

  def create
    @picturescene = @movie.picturescenes.new(picturescene_params)

    respond_to do |format|
      if @picturescene.save
        format.html { redirect_to movie_path(@movie), notice: 'Picture/video was successfully added.' }
        format.json { render :show, status: :created, location: @picturescene }
      else
        format.html { render :new }
        format.json { render json: @picturescene.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @picturescene.update(picturescene_params)
        format.html { redirect_to @movie, notice: 'Picture/video was successfully updated.' }
        format.json { render :show, status: :ok, location: @picturescene }
      else
        format.html { render :edit }
        format.json { render json: @picturescene.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @picturescene = @movie.picturescenes.find(params[:id])
    @movie = current_user.movies.find(params[:movie_id])
    @picturescene.destroy
    respond_to do |format|
      format.html { redirect_to movie_url(@movie), notice: 'Picture/video was successfully removed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_movie
      @movie = current_user.movies.find(params[:movie_id])
    end

    def set_picturescene
      @picturescene = @movie.picturescenes.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def picturescene_params
      params.require(:picturescene).permit(:name, :picture)
    end
end

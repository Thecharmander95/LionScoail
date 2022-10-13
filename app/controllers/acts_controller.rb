class ActsController < ApplicationController
  before_action :set_movie
  before_action :set_act, only: [:edit, :update, :destroy]

  def new
    @act = @movie.acts.new
  end

  def edit
  end

  def create
    @act = @movie.acts.new(act_params)

    respond_to do |format|
      if @act.save
        format.html { redirect_to movie_path(@movie), notice: 'Act was successfully added.' }
        format.json { render :show, status: :created, location: @act }
      else
        format.html { render :new }
        format.json { render json: @act.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @act.update(act_params)
        format.html { redirect_to @movie, notice: 'Act was successfully updated.' }
        format.json { render :show, status: :ok, location: @act }
      else
        format.html { render :edit }
        format.json { render json: @act.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @act.destroy
    respond_to do |format|
      format.html { redirect_to movie_url(@movie), notice: 'Act was successfully removed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_movie
      @movie = current_user.movies.find(params[:movie_id])
    end

    def set_act
      @act = @movie.acts.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def scene_params
      params.require(:act).permit(:part)
    end
end

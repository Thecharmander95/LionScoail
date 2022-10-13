class CreditsController < ApplicationController
  before_action :set_movie
  before_action :set_credit, only: [:edit, :update, :destroy]

  def new
    @credit = @movie.credits.new
  end

  def edit
  end

  def index
  end

  def create
    @credit = @movie.credits.new(credit_params)

    respond_to do |format|
      if @credit.save
        format.html { redirect_to movie_path(@movie), notice: 'Credit was successfully added.' }
        format.json { render :show, status: :created, location: @credit }
      else
        format.html { render :new }
        format.json { render json: @credit.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @credit.update(credit_params)
        format.html { redirect_to @movie, notice: 'Credit was successfully updated.' }
        format.json { render :show, status: :ok, location: @credit }
      else
        format.html { render :edit }
        format.json { render json: @credit.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @credit.destroy
    respond_to do |format|
      format.html { redirect_to movie_url(@movie), notice: 'Credit was successfully removed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_movie
      @movie = current_user.movies.find(params[:movie_id])
    end

    def set_credit
      @credit = @movie.credits.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def credit_params
      params.require(:credit).permit(:person,:for)
    end

end

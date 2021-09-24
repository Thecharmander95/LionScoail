class SitedisablesController < ApplicationController
  before_action :lionnav_disable
  before_action :set_sitedisable, only: %i[ edit update destroy ]

  # GET /sitedisables or /sitedisables.json
  def index
    @sitedisables = Sitedisable.all
  end

  # GET /sitedisables/1/edit
  def edit
  end

  # PATCH/PUT /sitedisables/1 or /sitedisables/1.json
  def update
    respond_to do |format|
      if @sitedisable.update(sitedisable_params)
        format.html { redirect_to sitedisables_path, notice: "Sitedisable was successfully updated." }
        format.json { render :show, status: :ok, location: @sitedisable }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @sitedisable.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /sitedisables/1 or /sitedisables/1.json
  def destroy
    @sitedisable.destroy
    respond_to do |format|
      format.html { redirect_to sitedisables_url, notice: "Sitedisable was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_sitedisable
      @sitedisable = Sitedisable.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def sitedisable_params
      params.require(:sitedisable).permit(:disable)
    end
end

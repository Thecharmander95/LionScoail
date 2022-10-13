class SitesController < ApplicationController
  def home
  end

  def betterprint
    @movie = current_user.movies.find(params[:movie_id])
  end

  def bettercreditprint
    @movie = current_user.movies.find(params[:movie_id])
  end
end

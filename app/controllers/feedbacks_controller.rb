class FeedbacksController < ApplicationController
  before_action :set_article
  before_action :authenticate_user!
  def new
    @feedback = @article.feedbacks.new
  end

  def create
    @feedback = @article.feedbacks.new(feedback_params)
    @feedback.user = current_user

    if @feedback.save
      redirect_to article_path(@feedback.article)
    else
      render :new
    end
  end

  def destroy
    @article = Article.friendly.find(params[:article_id])
    @feedback = Feedback.find(params[:id])
    @feedback.destroy
    redirect_to article_path(@feedback.article)
  end
  private

    def feedback_params
      params.require(:feedback).permit(:body)
    end

    def set_article
      @article = Article.friendly.find(params[:article_id])
    end
end

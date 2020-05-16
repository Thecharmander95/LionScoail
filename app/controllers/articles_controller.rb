class ArticlesController < ApplicationController
  before_action :set_article, only: [:edit, :update, :destroy, :show]

  def new
    @article = current_user.articles.new
  end

  def create
    @article = current_user.articles.new(article_params)
    if @article.save
      flash[:notice] = "Article was successfully created"
      redirect_to article_path(@article)
    else
      render 'new'
    end
 end

 def show
   @feedback = @article.feedbacks.new
 end

 def edit
 end

 def update
   if @article.update(article_params)
     flash[:notice] = "Article was updated"
     redirect_to article_path(@article)
   else
     flash[:notice] = "Article was not updated"
     render 'edit'
   end
end

def index
  if user_signed_in?
    @user = current_user
    @article = current_user.articles.new
  else
  end
  @articles = Article.all
  @articles = Article.order('title ASC')
end

def destroy
  @article.destroy
  flash[:notice] = "Article was deleted"
  redirect_to articles_path
 end

 private
  def set_article
    @article = Article.friendly.find(params[:id])
  end

  def article_params
    params.require(:article).permit(:title, :description, :content, :articleused, :sources)
  end
end

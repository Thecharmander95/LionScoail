module ArticlesHelper

  def is_article_user
    @article = Article.friendly.find(params[:id])
    if current_user == @article.user
    else
      redirect_to articles_path, notice: "You cant edit this article"
    end
  end
end

class AddTypeOfArticleToArticles < ActiveRecord::Migration[6.0]
  def change
    add_column :articles, :articleused, :text
  end
end

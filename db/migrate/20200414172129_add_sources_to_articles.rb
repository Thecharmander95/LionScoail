class AddSourcesToArticles < ActiveRecord::Migration[6.0]
  def change
    add_column :articles, :sources, :text
  end
end

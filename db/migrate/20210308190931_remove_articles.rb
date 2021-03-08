class RemoveArticles < ActiveRecord::Migration[6.1]
  def change
    drop_table :feedbacks
    drop_table :articles
  end
end

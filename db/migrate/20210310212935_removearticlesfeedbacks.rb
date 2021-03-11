class Removearticlesfeedbacks < ActiveRecord::Migration[6.1]
  def change
    remove_foreign_key "feedbacks", "articles"
    remove_foreign_key "feedbacks", "users"
    remove_foreign_key "articles", "users"
    drop_table :articles
    drop_table :feedbacks
  end
end

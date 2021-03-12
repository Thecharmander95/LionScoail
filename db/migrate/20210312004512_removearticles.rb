class Removearticles < ActiveRecord::Migration[6.1]
  def change
    drop_table :articles
    drop_table :feedbacks
  end
end

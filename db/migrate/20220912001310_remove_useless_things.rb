class RemoveUselessThings < ActiveRecord::Migration[7.0]
  def change
    remove_foreign_key :stories, :users

    drop_table :badusers
    drop_table :comics
    drop_table :sitedisables
    drop_table :stories
  end  
end

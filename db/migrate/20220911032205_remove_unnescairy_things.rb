class RemoveUnnescairyThings < ActiveRecord::Migration[7.0]
  def change
    remove_foreign_key :comments, :posts
    remove_foreign_key :comments, :users
    remove_foreign_key :messages, :conversations
    remove_foreign_key :messages, :users
    remove_foreign_key :posts, :users
    remove_foreign_key :room_messages, :rooms
    remove_foreign_key :room_messages, :users
    remove_foreign_key :suggestions, :users
    drop_table   :badusers
    drop_table   :comments
    drop_table   :conversations
    drop_table   :helps
    drop_table   :messages
    drop_table   :posts
    drop_table   :relationships
    drop_table   :room_messages
    drop_table   :rooms
    drop_table   :suggestions
    drop_table   :users
    remove_column :disables, :chatroomdisable
  end
end

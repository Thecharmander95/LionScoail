class RemoveUselessStuff < ActiveRecord::Migration[6.1]
  def change
    # The tables no longer needed on this db
    drop_table :abouts
    drop_table :announcements
    drop_table :articles
    drop_table :disables
    drop_table :labouts
    drop_table :stories
  end
end

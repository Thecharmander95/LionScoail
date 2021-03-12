class Storiesremoe < ActiveRecord::Migration[6.1]
  def change
    drop_table :stories
  end
end

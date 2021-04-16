class Removeabout < ActiveRecord::Migration[6.1]
  def change
    drop_table :abouts
  end
end

class AddHomeToDisable < ActiveRecord::Migration[6.1]
  def change
    add_column :disables, :homedisable, :text
  end
end

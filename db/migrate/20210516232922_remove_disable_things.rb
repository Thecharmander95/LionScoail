class RemoveDisableThings < ActiveRecord::Migration[6.1]
  def change
    remove_column :disables, :articledisable
    remove_column :disables, :storydisable
  end
end

class RenameLabout < ActiveRecord::Migration[6.1]
  def change
    rename_table :labouts , :abouts
  end
end

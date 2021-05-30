class UserDisableToDisable < ActiveRecord::Migration[6.1]
  def change
    add_column :disables, :userdisable, :text
  end
end

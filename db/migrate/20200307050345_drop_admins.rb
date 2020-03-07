class DropAdmins < ActiveRecord::Migration[6.0]
  def change
    drop_table :admins
    drop_table :owners
  end
end

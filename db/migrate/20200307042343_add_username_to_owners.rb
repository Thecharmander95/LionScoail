class AddUsernameToOwners < ActiveRecord::Migration[6.0]
  def change
    add_column :owners, :username, :string
    add_index :owners, :username, unique: true

    Owner.all.each do |owner|
      owner.update_attribute(:username, "name_#{owner.id}")
    end

    change_column_null :owners, :username, false
  end
end

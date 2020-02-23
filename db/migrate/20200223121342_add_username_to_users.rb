class AddUsernameToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :username, :string
    add_index :users, :username, unique: true

    User.all.each do |user|
      user.update_attribute(:username, "name_#{user.id}")
    end

    change_column_null :users, :username, false
  end
end

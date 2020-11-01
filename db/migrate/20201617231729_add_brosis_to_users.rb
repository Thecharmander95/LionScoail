class AddBrosisToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :brosis, :string
  end
end

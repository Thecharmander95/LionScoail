class AddVrifiedToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :verfaied, :string
  end
end

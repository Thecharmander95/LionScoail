class Userfix2 < ActiveRecord::Migration[6.1]
  def change
    remove_column :users, :verfaied, :string
    remove_column :users, :brosis, :string
  end
end

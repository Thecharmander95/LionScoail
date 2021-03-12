class Removekey < ActiveRecord::Migration[6.1]
  def change
    remove_foreign_key "stories", "users"
  end
end

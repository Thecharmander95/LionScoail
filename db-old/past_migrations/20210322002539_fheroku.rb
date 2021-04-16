class Fheroku < ActiveRecord::Migration[6.1]
  def change
    remove_foreign_key "pmessages", "users"
  end
end

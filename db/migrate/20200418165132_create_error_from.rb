class CreateErrorFrom < ActiveRecord::Migration[6.0]
  def change
    create_table :error_froms do |t|
      t.string :error
      t.string :where
      t.string :explain
      t.references :user, null: false, foreign_key: true
      t.timestamps
    end
  end
end

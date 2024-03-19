class CreatePayments < ActiveRecord::Migration[7.1]
  def change
    remove_foreign_key :expenses, :payments
    drop_table :payments
    drop_table :expenses
    create_table :payments do |t|
      t.string :method
      t.date :experation
      t.boolean :expierd
      t.integer :digts
      t.float :samount
      t.float :camount
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end

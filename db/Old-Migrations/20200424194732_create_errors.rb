class CreateErrors < ActiveRecord::Migration[6.0]
  def change
    create_table :errors do |t|
      t.string :error
      t.text :description

      t.timestamps
    end
  end
end

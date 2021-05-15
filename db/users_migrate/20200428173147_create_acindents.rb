class CreateAcindents < ActiveRecord::Migration[6.0]
  def change
    create_table :acindents do |t|
      t.string :username
      t.string :explain

      t.timestamps
    end
  end
end

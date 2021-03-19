class TemporyDisable < ActiveRecord::Migration[6.1]
  def change
    create_table :disables do |t|
      t.string :postdisable
      t.string :conversationdisable
      t.string :articledisable
      t.string :chatroomdisable
      t.string :storydisable
    end
  end
end

class Addnewabout < ActiveRecord::Migration[6.1]
  def change
    create_table :labouts do |t|
      t.string :title
      t.text :ltoppara
      t.text :lchange
      t.text :llist1
      t.text :llist2
      t.text :llist3
      t.text :lbuttum
      t.text :llinkgithub
      t.text :lgithubtitle
    end
  end
end

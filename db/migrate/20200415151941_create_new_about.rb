class CreateNewAbout < ActiveRecord::Migration[6.0]
  def change
    create_table :abouts do |t|
      t.string :title
      t.text :toppara
      t.text :change
      t.text :list1
      t.text :list2
      t.text :list3
      t.text :buttum
    end
    add_column :abouts, :linkgithub, :text
    add_column :abouts, :githubtitle, :text
  end
end

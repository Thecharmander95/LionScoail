class CreateAbouts < ActiveRecord::Migration[6.1]
  def change
    create_table :abouts do |t|
      t.string :title
      t.text :toparea
      t.text :change
      t.text :list1
      t.text :list2
      t.text :list3
      t.text :bottom
      t.text :linkgithub
      t.text :githubtitle

      t.timestamps
    end
  end
end

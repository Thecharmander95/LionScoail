class CreateArticles < ActiveRecord::Migration[5.1]
  def change
    create_table :articles do |t|
     t.string :title, unique: true
     t.text :description
     t.string :content
     t.references :user, null: false, foreign_key: true

     t.timestamps
    end
    add_column :articles, :sources, :text
    add_column :articles, :articleused, :text
  end
end

class Fixheroku < ActiveRecord::Migration[6.1]
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
    add_column :articles, :slug, :string
    add_index :articles, :slug, unique: true

    create_table :feedbacks do |t|
      t.references :user, null: false, foreign_key: true
      t.references :article, null: false, foreign_key: true
      t.text :body

      t.timestamps
    end

    create_table :stories do |t|
      t.text :content
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end

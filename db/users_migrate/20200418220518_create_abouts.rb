class CreateAbouts < ActiveRecord::Migration[6.0]
  def change
    add_column :abouts, :linkgithub, :text
    add_column :abouts, :githubtitle, :text
  end
end

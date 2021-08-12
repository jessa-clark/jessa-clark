class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.string :title
      t.string :image_url
      t.string :deployed_url
      t.string :github_url
      t.string :specs
      t.text :content
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end

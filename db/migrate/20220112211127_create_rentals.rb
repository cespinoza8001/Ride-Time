class CreateRentals < ActiveRecord::Migration[6.1]
  def change
    create_table :rentals do |t|
      t.integer :user_id
      t.integer :year
      t.string :make
      t.string :model
      t.integer :cc
      t.string :image_url

      t.timestamps
    end
  end
end

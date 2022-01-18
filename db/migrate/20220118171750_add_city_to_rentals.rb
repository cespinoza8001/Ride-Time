class AddCityToRentals < ActiveRecord::Migration[6.1]
  def change
    add_column :rentals, :city, :string
  end
end

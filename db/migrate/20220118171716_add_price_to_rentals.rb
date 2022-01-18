class AddPriceToRentals < ActiveRecord::Migration[6.1]
  def change
    add_column :rentals, :price, :integer
  end
end

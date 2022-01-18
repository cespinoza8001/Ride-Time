class AddStateToRentals < ActiveRecord::Migration[6.1]
  def change
    add_column :rentals, :state, :string
  end
end

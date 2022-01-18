class RemoveCcFromRentals < ActiveRecord::Migration[6.1]
  def change
    remove_column :rentals, :cc, :integer
  end
end

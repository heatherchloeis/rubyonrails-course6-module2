class AddZipCodeToCities < ActiveRecord::Migration
  def change
    add_column :cities, :zip_code, :string
  end
end

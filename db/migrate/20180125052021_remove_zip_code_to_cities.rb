class RemoveZipCodeToCities < ActiveRecord::Migration
  def change
    remove_column :cities, :zip_code, :string
  end
end

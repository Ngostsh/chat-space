class AddNameToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :name, :string
    add_index :users, :name, unique: true
    change_column_null :users, :name, false
  end
end

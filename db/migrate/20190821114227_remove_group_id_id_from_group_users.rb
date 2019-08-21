class RemoveGroupIdIdFromGroupUsers < ActiveRecord::Migration[5.0]
  def change
    remove_column :group_users, :group_id_id, :integer
  end
end

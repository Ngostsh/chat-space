class RemoveGroupIdFromGroupUsers < ActiveRecord::Migration[5.0]
  def change
    remove_reference :group_users, :group
    remove_reference :group_users, :user
  end
end

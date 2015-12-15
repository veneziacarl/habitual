class AddHabitsColumnType < ActiveRecord::Migration
  def change
    add_column(:habits, :time_type, :string)
  end
end

class CreateHabits < ActiveRecord::Migration
  def change
    create_table :habits do |t|
      t.string :title, null: false
      t.string :description, null: false
    end
  end
end

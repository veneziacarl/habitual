habits_list = [
  [ "Brush Teeth", "keep them clean", "daily" ],
  [ "Make Bed", "keep it tidy", "monthly" ],
  [ "<= 1 hour of TV", "limit yourself", "yearly" ],
  [ "Wake up by 7am", "start the day off right", "daily" ]
]

habits_list.each do |habit|
  Habit.create( {title: habit[0], description: habit[1], time_type: habit[2]} )
end

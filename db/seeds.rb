habits_list = [
  [ "Brush Teeth", "keep them clean" ],
  [ "Make Bed", "keep it tidy" ],
  [ "<= 1 hour of TV", "limit yourself" ],
  [ "Wake up by 7am", "start the day off right" ]
]

habits_list.each do |title, description|
  Habit.create( {title: title, description: description} )
end

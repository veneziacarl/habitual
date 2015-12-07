import React from 'react';
import Habit from './Habit.jsx';


class HabitList extends React.Component {
  render() {
    var habitNodes = this.props.habits.map(function(habit) {
      return (
        <Habit title={habit.title} key={habit.id}>
          {habit.description}
        </Habit>
      )
    });
    return (
      <div className="habitList">
        {habitNodes}
      </div>
    );
  }
}

export default HabitList;
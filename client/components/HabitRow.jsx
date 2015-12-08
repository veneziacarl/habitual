import React from 'react';
import HabitDetails from './HabitDetails.jsx';

class HabitRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    var habitNodes = this.props.habits.map(function(habit) {
      return (
        <HabitDetails title={habit.title} key={habit.id} description={habit.description} />
      );
    });
    return (
      <div className="habitRow">
        {habitNodes}
      </div>
    );
  }
}

export default HabitRow;


      // <div className="habitRow">
      //   <HabitDetails title={habit.title} key={habit.id} description={habit.description} />
      // </div>
// render () {
//   var habitNodes = this.props.habits.map(function(habit) {
//     <Habit title={habit.title} key={habit.id}>
//       {habit.description}
//     </Habit>
//   });
//   return (
//     <div className="habitRow">
//       {habitNodes}
//     </div>
//   );
// }

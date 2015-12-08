import React from 'react';
import HabitDetails from './HabitDetails.jsx';

class HabitRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="habitRow">
        <HabitDetails habits={this.props.habits} />
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

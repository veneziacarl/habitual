import React from 'react';
import HabitDetails from './HabitDetails.jsx';
import HabitDelete from './HabitDelete.jsx';
import HabitUpdate from './HabitUpdate.jsx';

class HabitRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    debugger;
    const Row = ({ children }) => {
      return <div className="row"> {children} </div>
    }
    var habitRows = this.props.habits.map(function(habit) {
      return (
        <Row>
          <HabitDetails {...habit} />
          <HabitDelete />
          <HabitUpdate />
        </Row>
      );
    })
    return (
      <div className="habitRow">
        {habitRows}
      </div>
    );
  }


}

export default HabitRow;


          // <HabitDelete />
          // <HabitDelete />
        // <HabitDelete key={habit.id} />
        // <HabitUpdate key={habit.id} />


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

import React from 'react';
// import HabitDetails from './HabitDetails.jsx';
import HabitDayStatus from './HabitDayStatus.jsx';
// import HabitDelete from './HabitDelete.jsx';
// import HabitUpdate from './HabitUpdate.jsx';

class HabitRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const Row = ({ children }) => {
      return (
        <div>
          {children}
        </div>
      )
    }

    var habitRows = this.props.habits.map(function(habit) {
      return (
        <Row key={habit.id} className="small-12 columns">
          <div className="dayTitle small-4 columns">
            {habit.title}
          </div>
          <div className="dayStatus small-8 columns">
            <HabitDayStatus day="m" />
            <HabitDayStatus day="t" />
            <HabitDayStatus day="w" />
            <HabitDayStatus day="th" />
            <HabitDayStatus day="f" />
            <HabitDayStatus day="sa" />
            <HabitDayStatus day="sn" />
          </div>
          <div className="dayDesc small-2 columns">
            {habit.description}
          </div>
          <div className="dayButtons small-10 columns">
            <a value="update" className="habitUpdate below button">Update</a>
            <a value="delete" className="habitDelete below button">Delete</a>
          </div>
        </Row>
      );
    })

    return (
      <div>
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

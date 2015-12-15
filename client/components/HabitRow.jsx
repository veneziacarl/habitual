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
        <Row key={habit.id} className="habitRow row">
          <div className="small-10 small-offset-1 columns">
            <div className="dayTitle small-3 columns">
              {habit.title}
            </div>
            <div className="small-1 columns">
              <HabitDayStatus day="m" />
            </div>
            <div className="small-1 columns">
              <HabitDayStatus day="t" />
            </div>
            <div className="small-1 columns">
              <HabitDayStatus day="w" />
            </div>
            <div className="small-1 columns">
              <HabitDayStatus day="th" />
            </div>
            <div className="small-1 columns">
              <HabitDayStatus day="f" />
            </div>
            <div className="small-1 columns">
              <HabitDayStatus day="sa" />
            </div>
            <div className="small-1 columns end">
              <HabitDayStatus day="sn" />
            </div>
          </div>
          <div className="small-10 small-offset-1 columns">
            <div className="dayDesc small-4 columns">
              {habit.description}
            </div>
            <div className="dayButtons small-6 columns">
              <a value="update" className="habitUpdate warning button">Update</a>
              <a value="delete" className="habitDelete alert button">Delete</a>
            </div>
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

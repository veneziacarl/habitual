import React from 'react';
import HabitDetails from './HabitDetails.jsx';
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
        <tr>
          {children}
        </tr>
      )
    }

    var habitRows = this.props.habits.map(function(habit) {
      return (
        <Row key={habit.id} class="habitRow">
          <td>{habit.title}
            <HabitDayStatus day="m" />
            <HabitDayStatus day="t" />
            <HabitDayStatus day="w" />
            <HabitDayStatus day="th" />
            <HabitDayStatus day="f" />
            <HabitDayStatus day="sa" />
            <HabitDayStatus day="sn" />
          </td>
          <td>{habit.description}</td>
          <td><a value="update" className="habitUpdate below success button">Update</a></td>
          <td><a value="delete" className="habitDelete below alert button">Delete</a></td>
        </Row>
      );
    })
    return (
      <tbody>
        {habitRows}
      </tbody>
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

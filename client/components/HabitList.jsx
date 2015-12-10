import React from 'react';
import HabitDetails from './HabitDetails.jsx';
import HabitRow from './HabitRow.jsx';
import HabitLabelRow from './HabitLabelRow.jsx';


class HabitList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <table className="habitList">
        <thead>
          <tr>
          <HabitLabelRow labels={this.props.labels} />
          </tr>
        </thead>
          <HabitRow habits={this.props.habits} />
      </table>
    );
  }
}

export default HabitList;

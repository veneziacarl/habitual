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
      <div className="habitList row">
        <HabitLabelRow labels={this.props.labels} />
        <HabitRow habits={this.props.habits} />
      </div>
    );
  }
}

export default HabitList;

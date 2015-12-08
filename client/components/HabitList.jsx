import React from 'react';
import HabitDetails from './HabitDetails.jsx';
import HabitRow from './HabitRow.jsx';


class HabitList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="habitList">
        <HabitRow habits={this.props.habits} />
      </div>
    );
  }
}

export default HabitList;

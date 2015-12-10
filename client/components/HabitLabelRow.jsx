import React from 'react';

class HabitLabelRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <th>
        {this.props.labels}
      </th>
    );
  }
}
export default HabitLabelRow;

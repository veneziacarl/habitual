import React from 'react';

class HabitLabelRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="dayLabels small-8 small-centered columns">
        {this.props.labels}
      </div>
    );
  }
}
export default HabitLabelRow;

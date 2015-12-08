import React from 'react';

class HabitLabelRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="habitLabelRow">
        {this.props.labels}
      </div>
    );
  }
}
export default HabitLabelRow;

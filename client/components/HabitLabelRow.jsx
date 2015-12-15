import React from 'react';

class HabitLabelRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="dayLabels small-10 small-offset-1 columns">
        <div className="small-3 columns">Habits</div>
        <div className="small-7 columns end">{this.props.labels}</div>
      </div>
    );
  }
}
export default HabitLabelRow;

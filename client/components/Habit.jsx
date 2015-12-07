import React from 'react';

class Habit extends React.Component {
  render () {
    return (
      <div className="habit">
        {this.props.title}
        {this.props.description}
        <div className="status">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Habit;

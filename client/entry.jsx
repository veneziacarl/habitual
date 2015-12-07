import React from 'react';
import {render} from 'react-dom';
import $ from 'jquery';
import HabitForm from './components/HabitForm.jsx';
import HabitList from './components/HabitList.jsx';

var habits = [
  {id: 1, title: "Brush Teeth", description: "Nice and clean"},
  {id: 2, title: "Make Bed", description: "Keepin' it fresh"},
];

class HabitBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {habits: []};
  }

  loadHabitsFromServer () {
    $.ajax({
      url: '/daily.json',
      method: 'GET',
      dataType: 'json',
      cache: false,
      success: function(habits) {
        this.setState({habits: habits});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }

  componentDidMount () {
    this.loadHabitsFromServer();
    setInterval(this.loadHabitsFromServer, this.props.pollInterval);
  }

  render () {
    return (
      <div className="habitBox">
        <p>Hello, world! I am a HabitBox.</p>
        <HabitForm />
        <h1>Habits</h1>
        <HabitList habits={this.state.habits} />
      </div>
    );
  }
};

$(function() {
  if ($('#react_daily').length) {
    render(<HabitBox url="/new" pollInterval={2000} />, document.getElementById('react_daily'));
  }
});

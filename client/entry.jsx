import React from 'react';
import {render} from 'react-dom';
import $ from 'jquery';
import HabitForm from './components/HabitForm.jsx';
import HabitList from './components/HabitList.jsx';

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
        console.error(this.props, status, err.toString());
      }.bind(this)
    });
  }

  handleHabitSubmit (habit) {
    $.ajax({
      url: '/daily.json',
      dataType: 'json',
      type: 'POST',
      data: habit,
      success: function(habits) {
        this.setState({habits: habits});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props, status, err.toString());
      }.bind(this)
    });
  }

  componentDidMount () {
    this.loadHabitsFromServer();
  }

  render () {
    return (
      <div className="habitBox">
        <p>Hello, world! I am a HabitBox.</p>
        <HabitForm onHabitSubmit={this.handleHabitSubmit} />
        <h1>Habits</h1>
        <HabitList habits={this.state.habits} />
      </div>
    );
  }
};

$(function() {
  if ($('#react_daily').length) {
    render(<HabitBox />, document.getElementById('react_daily'));
  }
});

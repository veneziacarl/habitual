import React from 'react';
import {render} from 'react-dom';
import $ from 'jquery';
import HabitForm from './components/HabitForm.jsx';
import HabitList from './components/HabitList.jsx';

class HabitBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      habits: [],
      labels: [
      "Habits", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ]};
    this.handleHabitSubmit = this.handleHabitSubmit.bind(this);
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
        var habitsArray = this.state.habits;
        var newHabits = habitsArray.concat(habits);
        this.setState({habits: newHabits});
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
        <div className="row">
          <div className="small-10 small-centered columns">
            <p>Add New Habit:</p>
            <HabitForm onHabitSubmit={this.handleHabitSubmit} />
          </div>
        </div>
        <div className="small-12 small-centered columns">
          <h1>Habits</h1>
          <HabitList habits={this.state.habits} labels={this.state.labels} />
        </div>
      </div>
    );
  }
};

$(function() {
  if ($('#react_daily').length) {
    render(<HabitBox />, document.getElementById('react_daily'));
  }
});

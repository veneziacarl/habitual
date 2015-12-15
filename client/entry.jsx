import React from 'react';
import {render} from 'react-dom';
import $ from 'jquery';
import HabitForm from './components/HabitForm.jsx';
import HabitList from './components/HabitList.jsx';
import TimeTabs from './components/TimeTabs.jsx';

class HabitBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      habits: { daily: [], weekly: [], yearly: [] },
      labels: [
      "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"
      ]};
    this.handleHabitSubmit = this.handleHabitSubmit.bind(this);
  }

  // loadHabitsFromServer () {
  //   $.ajax({
  //     url: '/daily.json',
  //     method: 'GET',
  //     dataType: 'json',
  //     cache: false,
  //     success: function(habits) {
  //       this.setState({habits: habits});
  //     }.bind(this),
  //     error: function(xhr, status, err) {
  //       console.error(this.props, status, err.toString());
  //     }.bind(this)
  //   });
  // }

  handleHabitSubmit (habit) {
    $.ajax({
      url: '/habits.json',
      dataType: 'json',
      type: 'POST',
      data: habit,
      success: function(habits) {
        // var habitType = habits.type
        var habitsArray = this.state.habits.daily;
        var newHabits = habitsArray.concat(habits);
        this.setState({habits: {daily: newHabits}});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props, status, err.toString());
      }.bind(this)
    });
  }

// TODO: needs to be changed to accomodate more than just daily... issues in success: not allowing me to string interpolate (tab)
// might have to just do a large logic block with separate AJAX calls for different tabs. lame!
  handleOpenTab (tab) {
    $.ajax({
      url: '/' + tab + '.json',
      method: 'GET',
      dataType: 'json',
      cache: false,
      success: function(habits) {
        this.setState({habits:{daily: habits}});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props, status, err.toString());
      }.bind(this)
    });
  }

  componentDidMount () {
    this.handleOpenTab('daily');
  }

  render () {
    return (
      <div className="habitBox">
        <div>
          <p>Add New Habit:</p>
          <HabitForm onHabitSubmit={this.handleHabitSubmit} />
        </div>
        <div>
          <TimeTabs
            habits={this.state.habits}
            labels={this.state.labels}
            onTabClick={this.handleOpenTab}
            onDeleteClick={this.handleHabitDelete}>
          </TimeTabs>
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

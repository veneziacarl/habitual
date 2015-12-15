var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();
const Tabs = require('material-ui/lib/tabs/tabs');
const Tab = require('material-ui/lib/tabs/tab');
import HabitRow from './HabitRow.jsx';
import HabitLabelRow from './HabitLabelRow.jsx';
import React from 'react';

class TimeTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabType: ''
    }
  }

  handleChange (e) {
    e.preventDefault();
    var tab = this.props.label.downcase;
    this.props.onTabClick(tab);
    this.setState({tabType: tab})
  }

  handleHabitDelete (habit) {
    $.ajax({
      url: '/habits.json',
      method: 'DELETE',
      dataType: 'json',
      data: habit,
      cache: false,
      success: function(habits) {
        var habitsArray = this.state.habits.daily;
        var removedHabit = habitsArray.pop();
        this.setState({habits: {daily: habitsArray}});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props, status, err.toString());
      }.bind(this)
    });
  }

  render() {
    return (
      <div className="timetabs small-12 medium-8 large-6 small-centered columns">
        <Tabs>
          <Tab label="daily" onClick={this.handleChange.bind(this)}>
            <div>
              <HabitRow habits={this.props.habits} tabType={this.state.tabType} onDeleteClick={this.handleHabitDelete.bind(this)} />
            </div>
          </Tab>
          <Tab label="monthly" onClick={this.handleChange.bind(this)}>
            (Tab content...)
          </Tab>
          <Tab label="yearly" onClick={this.handleChange.bind(this)}>
            (tab content..)
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default TimeTabs;
      // <Tabs onChange={this._handleChangeTabs.bind(this)} value={this.state.slideIndex + ''}>
      //   <Tab label="Tab One" value="0" />
      //   <Tab label="Tab Two" value="1" />
      //   <Tab label="Tab Three" value="2" />
      // </Tabs>

      // <Tabs
      //   valueLink={{value: this.state.tabsValue, requestChange: this._handleTabsChange.bind(this)}}>
      //   <Tab label="Tab A" value="a" >
      //     (Tab content...)
      //   </Tab>
      //   <Tab label="Tab B" value="b">
      //     (Tab content...)
      //   </Tab>
      // </Tabs>

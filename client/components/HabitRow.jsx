const Card = require('material-ui/lib/card/card');
const CardActions = require('material-ui/lib/card/card-actions');
const CardExpandable = require('material-ui/lib/card/card-expandable');
const CardHeader = require('material-ui/lib/card/card-header');
const CardMedia = require('material-ui/lib/card/card-media');
const CardText = require('material-ui/lib/card/card-text');
const CardTitle = require('material-ui/lib/card/card-title');
const FlatButton = require('material-ui/lib/flat-button');
const RaisedButton = require('material-ui/lib/raised-button');
import React from 'react';
import HabitDayStatus from './HabitDayStatus.jsx';

class HabitRow extends React.Component {
  constructor(props) {
    super(props);
    var tabType = this.props.tabType;
  }

  handleDelete (e) {
    e.preventDefault();
    var habit_id = this.id
    this.props.onHabitDelete({habit_id});
  }

  render () {
    const Row = ({ children }) => {
      return (
        <div>
          {children}
        </div>
      )
    }

    var habitRows = this.props.habits.daily.map(function(habit) {
      return (
        <Row key={habit.id} className="habitRow row">
          debugger;
          <Card initiallyExpanded={false}>
            <CardHeader
              title={habit.title}
              subtitle="Subtitle"
              actAsExpander={true}
              showExpandableButton={true}>
            </CardHeader>
            <CardText expandable={true}>
              {habit.description}
            </CardText>
            <CardActions expandable={true}>
              <RaisedButton label="Edit" secondary={true} />
              <RaisedButton label="Delete" primary={true} onClick={this.handleDelete.bind(this)} />
            </CardActions>
          </Card>
        </Row>
      );
    })

    return (
      <div>
        {habitRows}
      </div>
    );
  }
}

export default HabitRow;

            // avatar={<Avatar style={{color:'red'}}>A</Avatar>}

        // <Row key={habit.id} className="habitRow row">
        //   <div className="small-10 small-offset-1 columns">
        //     <div className="dayTitle small-3 columns">
        //       {habit.title}
        //     </div>
        //     <div className="small-1 columns">
        //       <HabitDayStatus day="m" />
        //     </div>
        //     <div className="small-1 columns">
        //       <HabitDayStatus day="t" />
        //     </div>
        //     <div className="small-1 columns">
        //       <HabitDayStatus day="w" />
        //     </div>
        //     <div className="small-1 columns">
        //       <HabitDayStatus day="th" />
        //     </div>
        //     <div className="small-1 columns">
        //       <HabitDayStatus day="f" />
        //     </div>
        //     <div className="small-1 columns">
        //       <HabitDayStatus day="sa" />
        //     </div>
        //     <div className="small-1 columns end">
        //       <HabitDayStatus day="sn" />
        //     </div>
        //   </div>
        //   <div className="small-10 small-offset-1 columns">
        //     <div className="dayDesc small-4 columns">
        //       {habit.description}
        //     </div>
        //     <div className="dayButtons small-6 columns">
        //       <a value="update" className="habitUpdate warning button">Update</a>
        //       <a value="delete" className="habitDelete alert button">Delete</a>
        //     </div>
        //   </div>
        // </Row>
        //


// <Card>
//   <CardHeader
//     title="Title"
//     subtitle="Subtitle"
//     avatar={<Avatar>A</Avatar>}/>
//   <CardHeader
//     title="Demo Url Based Avatar"
//     subtitle="Subtitle"
//     avatar="http://lorempixel.com/100/100/nature/"/>
//   <CardMedia overlay={<CardTitle title="Title" subtitle="Subtitle"/>}>
//     <img src="http://lorempixel.com/600/337/nature/"/>
//   </CardMedia>
//   <CardTitle title="Title" subtitle="Subtitle"/>
//   <CardActions>
//     <FlatButton label="Action1"/>
//     <FlatButton label="Action2"/>
//   </CardActions>
//   <CardText>
//     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//     Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
//     Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
//     Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
//   </CardText>
// </Card>


          // <HabitDelete />
          // <HabitDelete />
        // <HabitDelete key={habit.id} />
        // <HabitUpdate key={habit.id} />


      // <div className="habitRow">
      //   <HabitDetails title={habit.title} key={habit.id} description={habit.description} />
      // </div>
// render () {
//   var habitNodes = this.props.habits.map(function(habit) {
//     <Habit title={habit.title} key={habit.id}>
//       {habit.description}
//     </Habit>
//   });
//   return (
//     <div className="habitRow">
//       {habitNodes}
//     </div>
//   );
// }

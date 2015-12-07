import React from 'react';

class HabitForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: "", description: ""};
  }

  handleTitleChange (e) {
    this.setState({title: e.target.value});
  }

  handleDescriptionChange (e) {
    this.setState({description: e.target.value});
  }

  handleSubmit (e) {
    e.preventDefault();
    var title = this.state.title.trim();
    var description = this.state.description.trim();
    if (!title || !description) {
      return;
    }
    this.props.onHabitSubmit({title: title, description: description});
    this.setState({title: '', description: ''});
  }

  render() {
    return (
      <div className="habitForm">
        <form className="habitForm" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Habit Title" value={this.state.title} onChange={this.handleTitleChange} />
          <input type="text" placeholder="Habit Description" value={this.state.description} onChange={this.handleDescriptionChange} />
          <input type="submit" value="Post" />
        </form>
      </div>
    );
  }
}

export default HabitForm;

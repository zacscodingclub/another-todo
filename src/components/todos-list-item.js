import React, { Component } from 'react';

export default class TodosListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false
    }
  }

  onEditClick() {
    this.setState({ isEditing: true });
  }

  onDeleteClick() {
    this.props.deleteTask(this.props.task);
  }

  onSaveClick(e) {
    e.preventDefault();
    const oldTask = this.props.task;
    const newTask = this.refs.editInput.value;

    this.props.saveTask(oldTask, newTask);
    this.setState({ isEditing: false });
  }

  onCancelClick() {
    this.setState({ isEditing: false });
  }
  renderButtons() {
    if (this.state.isEditing) {
      return (
        <td>
          <button onClick={this.onSaveClick.bind(this)}>Save</button>
          <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
        </td>
      )
    }
    return (
      <td>
        <button onClick={this.onEditClick.bind(this)}>Edit</button>
        <button onClick={this.onDeleteClick.bind(this)}>Delete</button>
      </td>
    );
  }

  renderItem() {
    const { task, isCompleted } = this.props;
    const taskStyle = {
      color: isCompleted ? 'green' : 'red',
      cursor: 'pointer'
    };

    if(this.state.isEditing) {
      return (
        <td>
          <form onSubmit={this.onSaveClick.bind(this)}>
            <input type="text" defaultValue={task} ref="editInput"/>
          </form>
        </td>

      )
    }
    return (
      <td style={taskStyle} onClick={this.props.toggleTask}>
        {task}
      </td>
    );
  }

  render() {
    return (
      <tr>
        {this.renderItem()}
        {this.renderButtons()}
      </tr>
    )
  }
}

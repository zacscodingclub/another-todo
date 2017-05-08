import React, { Component } from 'react';

export default class CreateTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false
    }
  }
  handleCreate(e) {
    e.preventDefault();

    const createInput = this.refs.createInput.value;
    const validatedInput = this.validateInput(createInput);

    if(validatedInput) {
      this.setState({ error: validatedInput });
      return;
    }
    this.setState({ error: null });
    this.props.createTask(createInput);
    this.refs.createInput.value = '';
  }

  validateInput(task) {
    let isDuplicate = this.props.todos.find(todo => todo.task === task);
    if(!task) {
      return 'Please enter a task';
    } else if (isDuplicate) {

      return 'Duplicate task'
    } else {
      return null;
    }
  }

  renderError() {
    if(!this.state.error) { return null; }
    return <div style={{color: 'red'}}>{this.state.error}</div>;
  }

  render() {
    return (
      <form onSubmit={this.handleCreate.bind(this)}>
        <input type="text" placeholder="What do I need to do?" ref="createInput"/>
        <input type="submit" />
        {this.renderError()}
      </form>
    )
  }
}

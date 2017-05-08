import React, { Component } from 'react';
import TodosList from './todos-list';

const todos = [
  {
    task: 'make react tutorial',
    isCompleted: false
  },
  {
    task: 'go to gym',
    isCompleted: false
  },
  {
    task: 'go to work',
    isCompleted: true
  }
]

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos
    }
  }
  render() {
    return (
      <div>
        <h1>React ToDos App</h1>
        <TodosList todos={this.state.todos} />
      </div>
    );
  }
}

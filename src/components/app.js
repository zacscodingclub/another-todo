import React, { Component } from 'react';
import CreateTodo from './create-todo';
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

  createTask(task) {
    let newTask = {task, isCompleted: false};
    this.setState({
      todos: [...this.state.todos, newTask]
    });
  }

  saveTask(oldTask, newTask) {
    let foundTask = this.state.todos.find(todo => todo.task === oldTask);
    foundTask.task = newTask;
    this.setState({
      todos: this.state.todos
    })
  }

  toggleTask(task) {
    let toggledTask = this.state.todos.find(todo => todo.task === task.target.textContent);
    toggledTask.isCompleted = !toggledTask.isCompleted;
    this.setState({ todos: this.state.todos });
  }

  deleteTask(taskToRemove) {
    let newTodos = this.state.todos.filter(todo => todo.task !== taskToRemove);
    this.setState({ todos: newTodos });
  }

  render() {
    return (
      <div>
        <h1>React ToDos App</h1>
        <CreateTodo createTask={this.createTask.bind(this)} />
        <TodosList
            todos={this.state.todos}
            toggleTask={this.toggleTask.bind(this)}
            saveTask={this.saveTask.bind(this)}
            deleteTask={this.deleteTask.bind(this)}
        />
      </div>
    );
  }
}

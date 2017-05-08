import React, { Component } from 'react';
import TodosListHeader from './todos-list-header';
import TodosListItem from './todos-list-item';

export default class TodosList extends Component {
  renderItems() {
    return this.props.todos.map((todo, index) => {
      return (
        <TodosListItem
                    key={index}
                    {...todo}
                    toggleTask={this.props.toggleTask}
                    saveTask={this.props.saveTask}
                    deleteTask={this.props.deleteTask}/>  
      );
    });
  }

  render() {
    return (
      <table>
        <TodosListHeader />
        <tbody>
          {this.renderItems()}
        </tbody>
      </table>
    );
  }
}

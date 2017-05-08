import React, { Component } from 'react';
import TodosListHeader from './todos-list-header';

export default class TodosList extends Component {
  render() {
    return (
      <table>
        <TodosListHeader />
      </table>
    )
  }
}

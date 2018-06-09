import * as React from 'react';
import { TodoItem } from './TodoItem';

export class TodoList extends React.Component {
  render() {
    return (
      <div className="todo-list">
        <TodoItem/>
      </div>
    );
  }
}
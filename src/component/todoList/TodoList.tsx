import * as React from 'react';
import { appStore } from '../../store/app.store';
import { reaction } from 'mobx';
import { TodoItem } from './TodoItem';

export class TodoList extends React.Component {
  componentWillUpdate() {
    console.log('2');
    if (appStore.todoList !== undefined) {
      reaction(() => appStore.todoList, (item) => console.log(item));

    }

  }
  render() {
    return (
      <div className="todo-list">
        <TodoItem/>
      </div>
    );
  }
}
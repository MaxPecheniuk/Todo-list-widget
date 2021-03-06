import * as React from 'react';
import { observer } from 'mobx-react';
import { appStore } from '../../store/app.store';
import { TodoItem } from './TodoItem';

@observer
export class TodoList extends React.Component {

  render() {
    let style = {};
    let todoItem = null;
    if (appStore.todoList.length === 0) {
      style = {
        display: 'none'
      };
    }
    if (appStore.todoList !== undefined) {
      todoItem = appStore.todoList.map((items, i) => {
        return (
          <TodoItem
            data={items}
            key={i}
            keys={i}
          />
        );
      });
    }
    return (
      <ul style={style} className="collection todo-list z-depth-4">
        {todoItem}
      </ul>
    );
  }
}
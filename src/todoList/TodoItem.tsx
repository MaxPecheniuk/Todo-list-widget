import * as React from 'react';
import { observer } from 'mobx-react';
import * as classnames from 'classnames';
import { appStore } from '../store/app.store';

import './TodoItem.scss';

@observer
export class TodoItem extends React.Component {

  render() {

    let className = classnames('todo-list__item');
    const todoItem = appStore.todoList.map((item, i) => {
      if (item.status) {
        className += ' completed';
      }
      return (
        <div key={i} className={className}>
          <input
            className="todo-list__item__done-btn"
            type="checkbox"
            checked={item.status}
            onClick={() => item.status = !item.status}
          />

          <div className="todo-list__item__todo-value">
            {item.value}
          </div>

          <button
            className="todo-list__item__delete-todo"
            onClick={() => {
              appStore.deleteTodoItem(i);
            }}
          >
            del
          </button>
        </div>
      );
    });

    return (
      todoItem
    );
  }
}
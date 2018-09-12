import * as React from 'react';
import { observer } from 'mobx-react';
import * as classnames from 'classnames';
import { appStore } from '../../store/app.store';

import './TodoItem.scss';

@observer
export class TodoItem extends React.Component {

  render() {

    const todoItem = appStore.todoList.map((item, i) => {
      let className = classnames('todo-list__item__todo-value');
      if (item.status) {
        className += ' completed';
      }
      return (
        <div key={i} className="todo-list__item">
          <input
            className="todo-list__item__done-checkbox"
            type="checkbox"
            checked={item.status}
            onClick={() => {
              item.status = !item.status;
            }}
          />
          <div className={className}>
            {item.value}

          </div>
          <button
            className="todo-list__item__delete-todo"
            onClick={() => {
              appStore.deleteTodoItem(i);
            }}
          >
            X
          </button>
        </div>
      );
    });

    return (
      todoItem
    );
  }
}
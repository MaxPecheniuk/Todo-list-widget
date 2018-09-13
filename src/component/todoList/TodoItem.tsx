import * as React from 'react';
import * as classnames from 'classnames';
import { appStore } from '../../store/app.store';
import './TodoItem.scss';

interface ITodoItemProps {
  data: any;
  keys: number;
}

export const TodoItem: React.SFC<ITodoItemProps> = (props: ITodoItemProps) => {
  let className = classnames('todo-list__item__todo-value');
  if (props.data.status) {
    className += ' completed';
  }
  return (
    <div className="todo-list__item">
      <input
        className="todo-list__item__done-checkbox"
        type="checkbox"
        checked={props.data.status}
        onClick={() => {
          props.data.status = !props.data.status;
        }}
      />
      <div className={className}>
        {props.data.value}
      </div>
      <button
        className="todo-list__item__delete-todo"
        onClick={() => {
          appStore.deleteTodoItem = props.keys;
        }}
      >
        X
      </button>
    </div>
  );
};
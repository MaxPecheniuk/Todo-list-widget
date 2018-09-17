import * as React from 'react';
import * as classnames from 'classnames';
import { appStore } from '../../store/app.store';
import './TodoItem.scss';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { SyntheticEvent } from 'react';

interface ITodoItemProps {
  data: any;
  keys: number;
}

@observer
export class TodoItem extends React.Component<ITodoItemProps> {
  @observable
  private _edit = false;

  render() {
    const {data} = this.props;
    let todoItem = <div/>;
    let editBtn = <div/>;
    let className = classnames('todo-list__item__todo-value');
    if (data.status) {
      className += ' completed';
    }
    if (this._edit) {
      editBtn = (
        <i
          className="todo-list__item__done-todo material-icons "
          onClick={() => {
            this._edit = !this._edit;
            appStore.updateLocalStorage();
          }}
        >
          done
        </i>);

      todoItem = (
        <div className="todo-list__item__todo-value">
          <input
            value={data.value}
            onChange={(event: SyntheticEvent<HTMLInputElement>) => data.value = event.currentTarget.value}
          />

        </div>
      );
    } else {
      todoItem = <div className={className}>{data.value}</div>;
      editBtn =
        <i className="todo-list__item__edit-todo material-icons" onClick={() => {this._edit = !this._edit; }}>edit</i>;
    }

    return (
      <li className="collection-item todo-list__item">

        <label className="valign-wrapper center-align">
          <input
            className="filled-in valign-wrapper"
            id="filled-in-box"
            type="checkbox"
            defaultChecked={data.status}
            onClick={() => {
              data.status = !data.status;
              appStore.updateLocalStorage();
            }}
          />
          <span/>
        </label>
        {todoItem}
        {editBtn}
        <i className="material-icons" onClick={() => {appStore.deleteTodoItem = this.props.keys; }}>delete</i>
      </li>
    );
  }

}
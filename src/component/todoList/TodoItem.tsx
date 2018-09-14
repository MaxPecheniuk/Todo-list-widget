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

  // @observable
  // private _inputTextt: string;

  handleInputChange = (event: SyntheticEvent<HTMLInputElement>) => {
    // this._inputTextt = event.currentTarget.value;
  }

  render() {
    const {data} = this.props;
    let todoItem = null;
    let className = classnames('todo-list__item__todo-value');
    if (data.status) {
      className += ' completed';
    }
    if (this._edit) {
      todoItem = (
        <div>
          <input
            value={data.value}
            onChange={(event: SyntheticEvent<HTMLInputElement>) => data.value = event.currentTarget.value}
          />
          <div
            onClick={() => {
            this._edit = !this._edit;
            appStore.updateLocalStorage();
          }}
          >
            DONE
          </div>
        </div>
      );
    } else {
      todoItem = <div className={className}>{data.value}</div>;
    }

    return (
      <li className="collection-item todo-list__item">

        <label className="valign-wrapper center-align">
          <input
            // className="todo-list__item__done-checkbox"
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
        <div onClick={() => this._edit = !this._edit}>edit</div>

        <i
          className="small material-icons"
          onClick={() => {
            appStore.deleteTodoItem = this.props.keys;
          }}
        >
          delete
        </i>
      </li>
    );
  }

}
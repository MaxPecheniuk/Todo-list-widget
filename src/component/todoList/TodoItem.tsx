import * as React from 'react';
import * as classnames from 'classnames';
import { appStore } from '../../store/app.store';
import './TodoItem.scss';
import { observer } from 'mobx-react';

interface ITodoItemProps {
  data: any;
  keys: number;
}

@observer
export class TodoItem extends React.Component<ITodoItemProps> {

  render() {
    const {data} = this.props;
    let className = classnames('todo-list__item__todo-value');
    if (data.status) {
      className += ' completed';
    }
    return (
      <li className="collection-item todo-list__item">

        <label>
          <input
            // className="todo-list__item__done-checkbox"
            className="filled-in"
            id="filled-in-box"
            type="checkbox"
            defaultChecked={data.status}
            onClick={() => {
              data.status = !data.status;
              appStore.updateLocalStorage();
            }}
          />
          <span className={className}>{data.value}</span>
        </label>
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
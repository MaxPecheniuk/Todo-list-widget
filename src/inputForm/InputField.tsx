import * as React from 'react';
import { appStore } from '../store/app.store';
import { observer } from 'mobx-react';
import { FormEvent } from 'react';

@observer
export class InputField extends React.Component {

  change = (e: any) => {
    appStore.inputValue.value = e.target.value;
  }

  sub(event: FormEvent<any>) {
    console.log(appStore.inputValue);
    event.preventDefault();
    appStore.addNewTodo();
    appStore.clearInput();

  }

  render() {

    return (
      <div>
        <input
          value={appStore.inputValue.value}
          onChange={this.change}
        />
        <button
          onClick={this.sub}
        >
          BTN
        </button>
        {appStore.inputValue.value}
        {appStore.todoList.map((value, i) => <div key={i}>{value.value}...{value.status}</div>)}
      </div>

    );
  }
}

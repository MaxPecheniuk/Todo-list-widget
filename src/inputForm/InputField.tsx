import * as React from 'react';
import { appStore } from '../store/app.store';
import { observer } from 'mobx-react';
import { FormEvent } from 'react';
// import { observable } from 'mobx';

@observer
export class InputField extends React.Component {

  // @observable
  // input: string = '';

  change = (e: any) => {
    appStore.valuetext = e.target.value;
  }

  sub(event: FormEvent<any>) {
    console.log(appStore.valuetext);
    event.preventDefault();
    appStore.addtodo();
    appStore.clear();

  }

  render() {

    return (
      <div>
        <input
          value={appStore.valuetext}
          onChange={this.change}
        />
        <button
          onClick={this.sub}
        >
          BTN
        </button>
        {appStore.valuetext}
        {appStore.todo.map((value, i) => <div key={i}>{value.value}</div>)}
      </div>

    );
  }
}

import * as React from 'react';
import { appStore, Test } from '../store/app.store';
import { observer } from 'mobx-react';
import { FormEvent } from 'react';
// import { observable } from 'mobx';

@observer
export class InputField extends React.Component<{}, Test> {

  // @observable
  // input: string = '';

  change = (e: any) => {
    appStore.input = e.target.value;
  }

  sub(event: FormEvent<any>) {
    event.preventDefault();
    appStore.addtodo();
    appStore.clear();

  }

  render() {

    return (
      <div>
        <input
          value={appStore.input}
          onChange={this.change}
        />
        <button
          onClick={this.sub}
        >
          BTN
        </button>
        {appStore.input}
      </div>

    );
  }
}

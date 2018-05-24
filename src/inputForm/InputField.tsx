import * as React from 'react';
// import { appStore } from '../store/app.store';
// import { observer } from 'mobx-react';
import { action, observable } from 'mobx';

// @observer
export class InputField extends React.Component {
  @observable
  input: string = '';

  @action


  render() {
    return (
      <input
        type="text"
        value={this.input}
      />
    );
  }
}

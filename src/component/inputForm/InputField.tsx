import * as React from 'react';
import { appStore } from '../../store/app.store';
import { observer } from 'mobx-react';

@observer
export class InputField extends React.Component {

  handleInputChange = (event: any) => {
    appStore.inputValue.value = event.target.value;
  }

  render() {
    return (
      <div className="input-form__input-wrapper">
        <input
          placeholder="Add Todo"
          className="input-form__input-field"
          value={appStore.inputValue.value}
          onChange={this.handleInputChange}
        />
      </div>

    );
  }

}

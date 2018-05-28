import * as React from 'react';
import { InputField } from './InputField';
import { appStore } from '../store/app.store';

import './InputForm.scss';

export class InputForm extends React.Component {

  submitHandler = (event: React.FormEvent<any>) => {
    event.preventDefault();

    // как улучшить проверку на пустое поле?
    if (appStore.inputValue.value.length > 0 && appStore.inputValue.value !== ' ') {
      appStore.addNewTodoItem();
      appStore.clearInput();
    }
  }

  render() {
    return (
      <form
        className="input-form"
        onSubmit={this.submitHandler}
      >
        <InputField/>
        <button
          className="input-form__submit-btn"
          onClick={this.submitHandler}
        >
          Submit
        </button>
      </form>

    );
  }
}
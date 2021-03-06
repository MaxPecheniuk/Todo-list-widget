import * as React from 'react';
import { SyntheticEvent } from 'react';
import { observer } from 'mobx-react';
import { action, observable } from 'mobx';
import { appStore } from '../../store/app.store';
import { InputField } from '../inputField/InputField';
import { TodoItemTypes } from '../../types/TodoItemTypes';

import './InputForm.scss';

const defaultTodo = {
  value: '',
  status: false
};

@observer
export class InputForm extends React.Component {

  @observable
  private _inputValue: TodoItemTypes = defaultTodo;

  submitHandler = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

  }

  addTodo = () => {
    if (this._inputValue.value.length > 0 && this._inputValue.value !== ' ') {
      appStore.addNewTodoItem = this._inputValue;
      this.clearInput();
    }
  }

  render() {
    return (
        <form className="input-form" onSubmit={this.submitHandler}>
          <InputField
            value={this._inputValue.value}
            onChange={action((value: string) => this._inputValue.value = value)}
          />
          <button
            className="btn waves-effect waves-light input-form__submit-btn"
            type="submit"
            name="action"
            onClick={this.addTodo}
          >
            Submit
          </button>
        </form>

    );
  }

  private clearInput(): void {
    this._inputValue = defaultTodo;
  }
}

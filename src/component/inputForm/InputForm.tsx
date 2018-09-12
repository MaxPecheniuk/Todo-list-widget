import * as React from 'react';
import { InputField } from '../inputField/InputField';

import './InputForm.scss';
import { observer } from 'mobx-react';
import { action, observable, reaction } from 'mobx';
import { TodoItemTypes } from '../../types/TodoItemTypes';
import { appStore } from '../../store/app.store';

const defaultTodo = {
  value: '',
  status: false
};

@observer
export class InputForm extends React.Component {
  @observable
  private _inputValue: TodoItemTypes = defaultTodo;

  submitHandler = (event: React.FormEvent<any>) => {
    event.preventDefault();

    if (this._inputValue.value.length > 0 && this._inputValue.value !== ' ') {
      appStore.addNewTodoItem(this._inputValue);
      this.clearInput();
    }
    console.log('aa');
    reaction(() => appStore.todoList, (item: any) => console.log(item));

  }

  render() {
    return (
      <form
        className="input-form"
        onSubmit={this.submitHandler}
      >
        <InputField
          value={this._inputValue.value}
          onChange={action((value: string) => this._inputValue.value = value)}
        />
        <button
          className="input-form__submit-btn"
          onClick={this.submitHandler}
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

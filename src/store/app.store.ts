import { computed, observable } from 'mobx';

export interface TodoItemType {
  value: string;
  status: boolean;
}

const defaultTodo = {
  value: '',
  status: false
};

export class AppStore {
  @observable
  public inputValue = {
    value: '',
    status: false
  };
  @observable
  private _todoList: Array<TodoItemType> = [];

  @computed
  get todoList(): Array<TodoItemType> {
    return this._todoList;
  }

  addNewTodo() {
    this.todoList.push(this.inputValue);
    console.log(this.todoList);

  }
   clearInput() {
    this.inputValue = defaultTodo;
  }
}

export const appStore = new AppStore();
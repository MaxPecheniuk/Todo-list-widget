import { action, computed, observable } from 'mobx';

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
  public inputValue = defaultTodo;

  @observable
  private _todoList: Array<TodoItemType> = [];

  @computed
  get todoList(): Array<TodoItemType> {
    return this._todoList;
  }

  @action
   addNewTodoItem(): void {
    this.todoList.push(this.inputValue);
  }

  @action
  deleteTodoItem(id: number): Array<TodoItemType> {
    return this._todoList.splice(id, 1);
  }

  clearInput(): void {
    this.inputValue = defaultTodo;
  }
}

export const appStore = new AppStore();
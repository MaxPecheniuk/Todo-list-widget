import { action, computed, observable } from 'mobx';
import { TodoItemTypes } from '../types/TodoItemTypes';

export class AppStore {

  @observable
  private _todoList: Array<TodoItemTypes> = [];

  @computed
  get todoList(): Array<TodoItemTypes> {
    return this._todoList;
  }

  @action
  addNewTodoItem(value: TodoItemTypes): void {
    this._todoList.push(value);
    this.updateLocalStorage();
  }

  @action
  deleteTodoItem(id: number): Array<TodoItemTypes> {
    this._todoList.splice(id, 1);
    this.updateLocalStorage();
    return this._todoList;
  }
  @action
  test() {
    this._todoList = JSON.parse(localStorage.getItem('__ToDoStorage__') || '{}');
  }

  private updateLocalStorage(): void {
    localStorage.setItem('__ToDoStorage__', JSON.stringify(this._todoList));
  }

}

export const appStore = new AppStore();
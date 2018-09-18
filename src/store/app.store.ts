import { computed, observable } from 'mobx';
import { TodoItemTypes } from '../types/TodoItemTypes';

export class AppStore {

  @observable
  private _todoList: Array<TodoItemTypes> = [];

  @computed
  get todoList(): Array<TodoItemTypes> {
    return this._todoList;
  }

  set addNewTodoItem (item: TodoItemTypes)  {
    this._todoList.push(item);
    this.updateLocalStorage();
  }

  set deleteTodoItem(id: number) {
    this._todoList.splice(id, 1);
    this.updateLocalStorage();

  }

  public parseTodo = () => {
    this._todoList = JSON.parse(localStorage.getItem('__toDoStorage__') || '[]');
  }

  public updateLocalStorage = (): void => {
    localStorage.setItem('__toDoStorage__', JSON.stringify(this._todoList));
  }

}

export const appStore = new AppStore();
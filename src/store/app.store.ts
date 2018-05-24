import { action, computed, observable } from 'mobx';

export interface TodoItem {
  todo: string;
}
export class AppStore {

  @observable
  public _inputValue: string = '';

  @observable
  private todos: Array<TodoItem>;

  init() {
    this.inputCheck();
  }

  @computed
  get addTodo(): Array<TodoItem> {
    return this.todos;
  }

  @action
  private inputCheck(): string {
    return this._inputValue;
  }

}

export const appStore = new AppStore();
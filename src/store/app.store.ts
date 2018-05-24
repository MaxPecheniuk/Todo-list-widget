import { computed, observable } from 'mobx';

export interface Test {
  text: string;
}
export class AppStore {
  @observable
  public input: string;

  @observable
  protected todos: Array<string> = [];

  @computed
  get todo(): Array<string> {
    return this.todos;
  }

  addtodo() {
    this.todos.push(this.input);
    console.log(this.todos.length);
  }
   clear() {
    this.input = '';
  }
}

export const appStore = new AppStore();
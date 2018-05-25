import { computed, observable } from 'mobx';

export interface Test {
  value: string;
}

export class AppStore {
  @observable
  public valuetext: string = '';

  @observable
  private todos: Array<Test> = [];

  @computed
  get todo(): Array<Test> {
    return this.todos;
  }

  addtodo() {
    this.todos.push({value: this.valuetext});
    console.log(this.todos.length);
    console.log(this.todos);

  }
   clear() {
    this.valuetext = '';
  }
}

export const appStore = new AppStore();
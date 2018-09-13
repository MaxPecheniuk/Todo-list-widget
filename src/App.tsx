import * as React from 'react';
import { InputForm } from './component/inputForm/InputForm';
import { TodoList } from './component/todoList/TodoList';

import './App.scss';
import { appStore } from './store/app.store';
class App extends React.Component {
  componentDidMount() {
    appStore.parseTodo();
  }

  render() {
    return (
      <div className="App">
        <InputForm/>
        <TodoList/>
      </div>
    );
  }
}

export default App;

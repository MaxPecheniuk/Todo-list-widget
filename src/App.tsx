import * as React from 'react';
import { InputForm } from './component/inputForm/InputForm';
import { TodoList } from './component/todoList/TodoList';

import './App.scss';
class App extends React.Component {

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

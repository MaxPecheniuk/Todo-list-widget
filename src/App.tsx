import * as React from 'react';
import './App.scss';
import { InputForm } from './inputForm/InputForm';
import { TodoList } from './todoList/TodoList';

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

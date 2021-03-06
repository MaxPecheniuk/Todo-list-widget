import * as React from 'react';
import { appStore } from './store/app.store';
import { InputForm } from './component/inputForm/InputForm';
import { TodoList } from './component/todoList/TodoList';

import './App.scss';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

class App extends React.Component {
  componentDidMount() {
    appStore.parseTodo();
  }

  render() {
    return (
      <div className="App container">
        <InputForm/>
        <TodoList/>
      </div>
    );
  }
}

export default App;

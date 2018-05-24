import * as React from 'react';
import './App.scss';
import { InputForm } from './inputForm/InputForm';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <InputForm/>
      </div>
    );
  }
}

export default App;

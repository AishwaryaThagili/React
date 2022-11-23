import  { Component } from 'react';

import './App.css';
import Todo from './components/Todo';
// import { Trial } from './components/Trial';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Todo />
      </div>
      // <Trial />
    );
  }
}

export default App;
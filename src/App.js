// import './App.css';

import { Component } from 'react/cjs/react.production.min';
import { v4 as uuid } from 'uuid';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <div className="app">
        <h1>Hello</h1>
      </div>
    );
  }
}

export default App;

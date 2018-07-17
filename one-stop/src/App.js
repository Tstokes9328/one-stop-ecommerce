import React, { Component } from 'react';

//Reset CSS
import 'reset-css';

//Routes
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <div>
        {Routes}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { Auth, Main } from 'pages';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Route exact path={['/', '/login']} component={Auth} />
        <Route exact path="/Main" component={Main} />
      </div>
    );
  }
}

export default App;

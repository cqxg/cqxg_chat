import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import LoginForm from './components/LoginForm/LoginForm';
import Main from './components/Main/Main';

const App = () => (
  <BrowserRouter>
    <Route exact path="/" render={() => <LoginForm />} />
    <Route path="/main" render={() => <Main />} />
  </BrowserRouter>
);

export default App;

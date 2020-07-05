import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Chat from './components/Main/Chat';
import LoginForm from './components/LoginForm/LoginForm';

const App = () => (
  <BrowserRouter>
    <Route exact path="/" component={() => <LoginForm />} />
    <Route path="/chat" component={() => <Chat />} />
  </BrowserRouter>
);

export default App;

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import LoginForm from './components/LoginForm/LoginForm';
import Chat from './components/Main/Chat';

const App = () => (
    <BrowserRouter>
        <Route exact path="/" component={() => <LoginForm />} />
        <Route path="/chat" component={() => <Chat />} />
    </BrowserRouter>
);

export default App;

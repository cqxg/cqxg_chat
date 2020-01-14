import React from 'react';

import LoginForm from './components/LoginForm';
import connecting from './store/Store';

const App = () => {
    connecting();

    return (
        <div>
            <LoginForm />
        </div>
    )
}

export default App;

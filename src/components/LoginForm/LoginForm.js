import React from 'react';

import './LoginForm.css';

const LoginForm = () => {

    const auth = (e) => {
        const name = e.target.value;
        localStorage.setItem('name', name);
    };

    return (
        <div className='block'>
            <div className='auth_top'>
                <h2>Log in</h2>
                <p>Please enter your username</p>
            </div>
            <form className='form' action="/main">
                <input type="text" name="user" placeholder="Username" required="required" onChange={auth} />
                <button type="submit" class="btn btn-primary btn-block btn-large">Let me in.</button>
            </form>
        </div>
    )
};

export default LoginForm;
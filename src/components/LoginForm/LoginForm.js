import React from 'react';

import './LoginForm.css'

const LoginForm = () => {

    const submit = (e) => {
        const name = e.target.value;
        localStorage.setItem('username', name);
    };

    return (
        <div class="login">
            <h1>Login</h1>
            <form action="/main">
                <input type="text" name="user" placeholder="Username" required="required"  onChange={submit} />
                    <button type="submit" class="btn btn-primary btn-block btn-large">Let me in.</button>
            </form>
        </div>
    )
};

export default LoginForm;
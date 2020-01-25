import React from 'react';
import { NavLink } from 'react-router-dom';

import './LoginForm.css'

const LoginForm = (props) => {

    const submit = (e) => {
        const name = e.target.value;
        props.login(name)
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
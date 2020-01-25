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
            <form method="post">
                <input type="text" name="u" placeholder="Username" required="required" value={props.from} onChange={submit} />
                <NavLink to='/main'>
                    <button type="submit" class="btn btn-primary btn-block btn-large">Let me in.</button>
                </NavLink>
            </form>
        </div>
    )
};

export default LoginForm;
import React from 'react';
import { Route } from 'react-router-dom';

import {LoginForm } from 'modules';

import './Auth.scss';

const blockName = 'auth';

const Auth = () => (
    <section className={blockName}>
        <div className={`${blockName}__content`}>
            <Route exact path={['/', '/login']} component={() => (<LoginForm blockName={blockName}/>)} />
        </div>
    </section>
);

export default Auth;
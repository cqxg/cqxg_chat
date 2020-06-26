import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from './Button';

import { RELOGIN } from '../../utils/const';

import './Button.scss';

const ReloginButton = () => (
    <NavLink to='/'>
        <Button type='primary' size='small'>
            {RELOGIN}
        </Button>
    </NavLink>
);

export default ReloginButton;
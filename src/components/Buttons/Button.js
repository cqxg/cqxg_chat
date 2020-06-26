import React from 'react';
import classNames from 'classnames';
import { Button as BaseButton } from 'antd';

import './Button.scss';

const Button = (props) => (
    <BaseButton
        {...props}
        className={classNames('button', props.className, {
            'button--large': props.size === 'large',
        })}
    />
);

export default Button;
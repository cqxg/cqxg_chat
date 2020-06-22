import React from 'react';
import { NavLink } from 'react-router-dom';
import { Form, Icon, Input } from 'antd';

import { LOGIN_H2, LOGIN_P, LOGIN_BUTTON_TEXT } from '../../utils/const';

import Block from '../Block/Block';
import Button from '../Button/Button';

import './LoginForm.scss';

const LoginForm = () => {

    return (
        <div className='wrapper'>
            <section className='auth'>
                <div className='auth__content'>
                    <div className='auth__top'>
                        <h2>{LOGIN_H2}</h2>
                        <p>{LOGIN_P}</p>
                    </div>
                    <Block>
                        <Form className='login-form' action='/main'>
                            <Form.Item hasFeedback>
                                <Input
                                    // onChange={auth}
                                    prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder='Username'
                                    size='large'
                                />
                            </Form.Item>
                            <Form.Item>
                                <NavLink to='/chat'>
                                    <Button type='primary' size='large'>
                                        {LOGIN_BUTTON_TEXT}
                                    </Button>
                                </NavLink>
                            </Form.Item>
                        </Form>
                    </Block>
                </div>
            </section>
        </div>
    );
};

export default LoginForm;

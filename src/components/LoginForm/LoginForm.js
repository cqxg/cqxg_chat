import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Icon, Input } from 'antd';

import { LOGIN_H2, LOGIN_P, LOGIN_BUTTON_TEXT } from '../../utils/const';

import Block from '../Block/Block';
import Button from '../Buttons/Button';

import './LoginForm.scss';

const LoginForm = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

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
                            <Form.Item>
                                <Input
                                    onChange={(event) => setName(event.target.value)}
                                    prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder='Username'
                                    size='large'
                                />
                            </Form.Item>
                            <Form.Item>
                                <Input
                                    onChange={(event) => setRoom(event.target.value)}
                                    placeholder='Room name'
                                    size='large'
                                />
                            </Form.Item>
                            <Form.Item>
                                <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                                    <Button type='primary' size='large'>
                                        {LOGIN_BUTTON_TEXT}
                                    </Button>
                                </Link>
                            </Form.Item>
                        </Form>
                    </Block>
                </div>
            </section>
        </div>
    );
};

export default LoginForm;

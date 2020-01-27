import React from 'react';
import { NavLink } from 'react-router-dom';
import { Form, Icon, Input } from 'antd';

import Block from '../Block/Block';
import Button from '../Button/Button';

import './LoginForm.scss';

const LoginForm = () => {
  const auth = (e) => {
    const name = e.target.value;
    localStorage.setItem('name', name);
  };

  return (

    <div className="wrapper">
      <section className="auth">
        <div className="auth__content">
          <div className="auth__top">
            <h2>Connect to chat</h2>
            <p>Please enter your username</p>
          </div>
          <Block>
            <Form className="login-form" action="/main">
              <Form.Item hasFeedback>
                <Input
                  onChange={auth}
                  prefix={
                      <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                                    }
                  placeholder="Username"
                  size="large"
                />
,
              </Form.Item>
              <Form.Item>
                <NavLink to="/main">
                  <Button type="primary" size="large">
                                        Let me in!
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

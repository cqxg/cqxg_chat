import React, { Component } from 'react';
import { Form, Icon, Input } from 'antd';
import { Link } from 'react-router-dom';

import { Button, Block } from 'components';
import getTop from 'utils/getTop';
import I18N from 'core/translation';

class LoginForm extends Component {

    render() {
        const { blockName } = this.props;
        const { LOGIN_HEADING, LOGIN_TEXT } = I18N.RU;

        return (
            <div>
                {getTop(blockName, LOGIN_HEADING, LOGIN_TEXT)}
                <Block>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item hasFeedback>
                            <Input
                                prefix={
                                    <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                                }
                                placeholder="Username"
                                size='large'
                            />,
                        </Form.Item>
                        <Form.Item>
                            <Link to='/Main'>
                                <Button onClick='to /Main' type='primary' size='large' to='/Main'>
                                    Войти в чат
                                </Button>
                            </Link>
                        </Form.Item>
                    </Form>
                </Block>
            </div>
        );
    };
};
export default LoginForm;
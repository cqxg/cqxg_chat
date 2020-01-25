import React from 'react';
import { connect } from 'react-redux';

import { login, } from '../../store/actions/ActionCreators';

import LoginForm from './LoginForm';

const LoginContainer = (props) => {
    
    return <LoginForm login={props.login} />
};

const mapStateToProps = (state) => ({
    id: state.id,
    from: state.from,
});

export default connect(mapStateToProps, { login })(LoginContainer);
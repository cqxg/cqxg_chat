import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoginForm from './LoginForm';

class LoginContainer extends Component {

    // componentDidMount() {
    //     const websocket = new WebSocket('wss://wssproxy.herokuapp.com/ ');
    //     websocket.onopen = () => {
    //         console.log('open');
    //     }
    //     websocket.onmessage = (e) => {
    //         const messages = JSON.parse(e.data);
    //         console.log(messages);
    //     };
    // };

    render() {
        return (
            <LoginForm
                login={this.props.login}
            />
        )
    }
};

const mapStateToProps = (state) => ({
    id: state.id,
    from: state.from,
});

export default connect(mapStateToProps, {})(LoginContainer);
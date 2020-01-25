import React, { Component } from 'react';
// import { connect } from 'react-redux';

class Main extends Component {
    componentDidMount() {
        const websocket = new WebSocket('wss://wssproxy.herokuapp.com/ ');
        websocket.onopen = () => {
            console.log('open');
        }
        websocket.onmessage = (e) => {
            const messages = JSON.parse(e.data);
            console.log(messages);
        };
    };
};

export default Main;


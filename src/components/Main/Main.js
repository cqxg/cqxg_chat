import React, { Component } from 'react';

import './Main.css';

class Main extends Component {

    constructor() {
        super();
        this._websocket = null;
        this.state = {
            connect: false,
            messages: [],
            user: 'user',
        };

        this.chatEnd = React.createRef();
        this.scrolling = () => this.chatEnd.current.scrollIntoView({ block: 'nearest' });
    };

    componentDidMount() {
        this._websocket = new WebSocket('wss://wssproxy.herokuapp.com/ ');
        this._websocket.onopen = () => {
            this.setState({ connect: true });
            console.log('open');
        }
        this._websocket.onmessage = (e) => {
            const messages = JSON.parse(e.data);
            console.log(messages);
            this.setState((state) => ({
                messages: [...state.messages, ...messages],
            }));
        };

    };

    goMap = () => {
        const newMap = this.state.messages.map((user) => (
            <div>
                <span>
                    {user.from}
                </span>
                <span>
                    {user.message}
                </span>
            </div>
        ));

        return newMap;
    };

    changeName(newName = 'user') {
        localStorage.setItem('name', JSON.stringify(newName));
        this.setState({ user: newName });
    }

    sendMessage = (e) => {
        const text = e.target.value;

        const message = {
            from: `${localStorage.name}`,
            message: `${text}`,
        };

        if (e.key === 'Enter') {
            e.target.value = '';
            console.log(text)
            this.scrolling();
            this._websocket.send(JSON.stringify(message));
        }
    };

    render() {
        return (
            <React.Fragment>
                <div className='content'>
                    {this.goMap()}
                </div>
                <input ref={this.chatEnd} onKeyPress={this.sendMessage} className='myMessage' type="text" placeholder="Message" />
            </React.Fragment>
        );
    };
};



export default Main;

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
    };

    componentDidMount() {
        const websocket = new WebSocket('wss://wssproxy.herokuapp.com/ ');
        websocket.onopen = () => {
            console.log('open');
        }
        websocket.onmessage = (e) => {
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
                <div>
                    {user.from}
                </div>
                <div>
                    {user.message}
                </div>
            </div>
        ));

        return newMap;
    };

    getNameFromStorage() {
        const newName = JSON.parse(localStorage.getItem('name'));
        if (newName) this.changeName(newName);
    }

    changeName(newName = 'user') {
        localStorage.setItem('name', JSON.stringify(newName));
        this.setState({ user: newName });
    }

    render() {
        return (
            <div>
                <div className='content'>
                    {this.goMap()}
                </div>
                <input className='myMessage' type="text" placeholder="Message" />
            </div>
        );
    };
};



export default Main;

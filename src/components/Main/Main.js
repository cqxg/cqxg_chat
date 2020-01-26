import React, { Component } from 'react';

import { Input } from 'antd';

import './Main.scss';

class Main extends Component {

    constructor() {
        super();
        this._websocket = null;
        this.state = {
            connect: false,
            messages: [],
            user: 'user',
        };

        this.isMe = false;
        // this.chatEnd = React.createRef();
        // this.scrolling = () => this.chatEnd.current.scrollIntoView({ block: 'nearest' });
    };

    componentDidMount() {
        this._websocket = new WebSocket('wss://wssproxy.herokuapp.com/ ');
        this._websocket.onopen = () => {
            this.setState({ connect: true });
            console.log('open');
        }
        this._websocket.onmessage = (e) => {
            const messages = JSON.parse(e.data);
            this.setState((state) => ({
                messages: [...state.messages, ...messages],
            }));
        };
    };

    goMap = () => {
        const newMap = this.state.messages.map((user) => (
            <div className={user.from === localStorage.name ? 'message--isme' : 'message'}>
                <div className='message__avatar'>
                    <img src='https://i.pinimg.com/236x/af/bb/82/afbb828cb5350d267e6dbeba042e85eb--anonymous-mask-guy-fawkes.jpg' />
                </div>
                <div className='message__content'>
                    <div className='message__bubble'>
                        <p className='message__text'>{user.message}</p>
                    </div>
                    <span className='message__sender'>{user.from}</span>
                </div>
            </div >
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
            // this.scrolling();
            this._websocket.send(JSON.stringify(message));
        }
    };

    render() {
        return (
            <React.Fragment>
                <div className='content'>
                    {this.goMap()}
                </div>
                <Input
                    className='myMessage'
                    onKeyPress={this.sendMessage}
                    // ref={this.chatEnd}
                    placeholder="Message"
                    size='large'
                />,
                {/* <input className='myMessage' type="text" placeholder="Message" /> */}
            </React.Fragment>
        );
    };
};



export default Main;

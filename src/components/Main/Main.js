import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Button from '../Button/Button';

import './Main.scss';

class Main extends Component {

    constructor() {
        super();
        this.state = {
            connect: false,
            messages: [],
            user: 'user',
        };

        this._websocket = null;
        this.chatEnd = React.createRef();
        this.scrolling = () => this.chatEnd.current.scrollIntoView({ block: 'nearest' });
    };

    componentDidMount() {
        this.connect();
        this._websocket.onclose = () => {
            this.setState({ connect: false });
            this.connect();;
        };
    };

    connect = () => {
        this._websocket = new WebSocket('wss://wssproxy.herokuapp.com/ ');
        this._websocket.onopen = () => {
            this.setState({ connect: true });
            console.log('open');
        }
        this._websocket.onmessage = (e) => {
            const messages = JSON.parse(e.data).reverse();
            this.setState((state) => ({
                messages: [...state.messages, ...messages],
            }));
            this.scrolling()
        };
    };

    goMap = () => {
        const newMap = this.state.messages.map((user) => (
            <div className={user.from === localStorage.name ? 'message--isme' : 'message'} >
                <div className='message__avatar' ref={this.chatEnd}>
                    <img src='https://i.pinimg.com/236x/af/bb/82/afbb828cb5350d267e6dbeba042e85eb--anonymous-mask-guy-fawkes.jpg' />
                </div>
                <div className='message__content'>
                    <div className='message__bubble'>
                        <p className='message__text'>{user.message}</p>
                    </div>
                    <span className='message__sender' >{user.from}</span>
                </div>
            </div >
        ));

        return newMap;
    };

    changeName = (newName = 'user') => {
        localStorage.setItem('name', JSON.stringify(newName));
        this.setState({ user: newName });
    }

    sendMessage = (e) => {
        let text = e.target.value;
        const message = {
            from: `${localStorage.name}`,
            message: `${text}`,
        };

        if (e.key === 'Enter') {
            this._websocket.send(JSON.stringify(message));
            e.target.value = '';
        }
    };

    render() {
        return (
            <div className='wrapper'>
                <NavLink to="/">
                    <Button type="primary" size="sall">
                        Relogin
                    </Button>
                </NavLink>
                <div className='content'>
                    {this.goMap()}
                </div>
                <input onKeyPress={this.sendMessage} className='myText' type="text" placeholder="Enter your message..." />
            </div>
        );
    };
};



export default Main;

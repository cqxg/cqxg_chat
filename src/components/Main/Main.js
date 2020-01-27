import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { AVATAR, RELOGIN } from '../../utils/const';
import Preloader from '../../utils/preloader';

import Button from '../Button/Button';

import './Main.scss';

class Main extends Component {

    constructor() {
        super();
        this.state = {
            user: 'user',
            messages: [],
            connect: false,
        };

        this._websocket = null;
        this.chatEnd = React.createRef();
        this.scrolling = () => this.chatEnd.current.scrollIntoView({ block: 'nearest' });
    };

    componentDidMount() {
        this.connect();
        this._websocket.onclose = () => {
            this.connect();
            this.setState({ connect: false });
        };
    };

    connect = () => {
        this._websocket = new WebSocket('wss://wssproxy.herokuapp.com/');
        this._websocket.onopen = () => {
            this.setState({ connect: true });
        };
        this._websocket.onmessage = (e) => {
            const messages = JSON.parse(e.data).reverse();
            this.setState((state) => ({ messages: [...state.messages, ...messages]}));
            this.scrolling();
        };
    };

    goMap = () => {
        const newMap = this.state.messages.map((user) => (
            <div className={user.from === localStorage.name ? 'message--isme' : 'message'} >
                <div className='message__avatar' >
                    <img src={AVATAR} />
                </div>
                <div className='message__content'>
                    <div className='message__bubble'>
                        <p className='message__text'>{user.message}</p>
                    </div>
                    <span className='message__sender' ref={this.chatEnd} >{user.from}</span>
                </div>
            </div >
        ));

        return newMap;
    };

    changeName = (newName = 'user') => {
        this.setState({ user: newName });
        localStorage.setItem('name', JSON.stringify(newName));
    };

    sendMessage = (e) => {
        let text = e.target.value;
        const message = {
            message: `${text}`,
            from: `${localStorage.name}`,
        };

        if (e.key === 'Enter') {
            e.target.value = '';
            this._websocket.send(JSON.stringify(message));
        };
    };

    render() {
        return (
            <div className='wrapper'>
                <NavLink to='/'>
                    <Button type='primary' size='small'>
                        {RELOGIN}
                    </Button>
                </NavLink>
                <div className={this.state.connect === false ? 'nocontent' : 'content' }>
                {this.state.connect === false ? <Preloader /> : this.goMap()}
                </div>
                <input onKeyPress={this.sendMessage} className='myText' type='text' placeholder='Enter your message...' />
            </div>
        );
    };
};

export default Main;

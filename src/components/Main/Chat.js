import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import queryString from 'query-string';
import io from "socket.io-client";

import { RELOGIN } from '../../utils/const';

import Input from '../Input/Input';
import Button from '../Button/Button';
import Messages from '../Messages/Messages';

import './Main.scss';

let socket;

const Chat = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const ENDPOINT = 'http://localhost:5000';
    useEffect(() => {
        //eslint-disable-next-line
        const { name, room } = queryString.parse(location.search);

        socket = io(ENDPOINT);

        setRoom(room);
        setName(name);

        socket.emit('join', { name, room }, (error) => {
            if (error) {
                alert(error);
            };
        });
        //eslint-disable-next-line
    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message', message => {
            setMessages(messages => [...messages, message]);
        });

        socket.on("roomData", ({ users }) => {
            setUsers(users);
        });
    }, []);

    const sendMessage = (event) => {
        event.preventDefault();

        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        };
    };

    return (
        <div className='chat'>
            <NavLink to='/'>
                <Button type='primary' size='small'>
                    {RELOGIN}
                </Button>
            </NavLink>
            <div className='content'>
                <Messages messages={messages} name={name} />
            </div>
            <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
        </div>
    )
};

export default Chat;
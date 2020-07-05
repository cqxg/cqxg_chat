import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import Input from '../Input/Input';
import InfoBar from '../InfoBar/InfoBar';
import AsideBar from '../AsideBar/AsideBar';
import Messages from '../Messages/Messages';

import './Main.scss';

let socket;

const Chat = () => {
  const [name, setName] = useState('');
  // eslint-disable-next-line
    const [room, setRoom] = useState('');
  // eslint-disable-next-line
    const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const ENDPOINT = 'https://cqxg-chat-server.herokuapp.com/';
  useEffect(() => {
    // eslint-disable-next-line
        const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name);

    socket.emit('join', { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
    // eslint-disable-next-line
    }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on('roomData', ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      <AsideBar users={users} />
    </div>
  );
};

export default Chat;

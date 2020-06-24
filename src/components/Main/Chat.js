import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { AVATAR, RELOGIN } from '../../utils/const';
import Preloader from '../../utils/preloader';

import Button from '../Button/Button';

import './Main.scss';

let socket;

const Chat = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    return (
        <div className='chat'>
            <NavLink to='/'>
                <Button type='primary' size='small'>
                    {RELOGIN}
                </Button>
            </NavLink>
            <div className='nocontent'>
                <Preloader />
            </div>
            <input className='input' type='text' placeholder='Enter your message...' />
        </div>
    )
};

export default Chat;

// const Main = () => {
//     const [state, setState] = useState({
//         user: 'user',
//         messages: [{
//             from: 'Vasya'
//         }],
//         connect: false,
//     });

//     let _websocket = null;
//     const chatEnd = React.createRef();

//     const connect = () => {
//         _websocket = new WebSocket('ws://localhost:3030/');
//         _websocket.onopen = () => {
//             setState({ connect: true });
//         };

//         _websocket.onmessage = (e) => {
//             const messages = JSON.parse(e.data).reverse();
//             setState({ messages: [...state.messages, ...messages] });
//             chatEnd.current.scrollIntoView({ block: 'nearest' })
//         };

//         _websocket.onclose = () => {
//             setState({ connect: false });
//             setTimeout(() => {
//                 connect();
//             }, 1000);
//         };
//     };

//     useEffect(() => connect(), []);

//     const mappedMessages = () => {
//         const newMap = state.messages.map((user) => (
//             <div className={user.from === localStorage.name ? 'message--isme' : 'message'} key={user.time} >
//                 <div className='message__avatar' >
//                     <img src={AVATAR} />
//                 </div>
//                 <div className='message__content'>
//                     <div className='message__bubble'>
//                         <p className='message__text'>{user.message}</p>
//                     </div>
//                     <span className='message__sender' ref={chatEnd} >{user.from}</span>
//                 </div>
//             </div>
//         ));
//     };

//     const changeName = (newName = 'user') => {
//         setState({ user: newName });
//         localStorage.setItem('name', JSON.stringify(newName));
//     };

//     const sendMessage = (e) => {
//         if (localStorage.name === undefined) {
//             localStorage.name = 'Anonymous';
//         };

//         let text = e.target.value;
//         const message = {
//             message: `${text}`,
//             from: `${localStorage.name}`,
//         };

//         if (e.key === 'Enter') {
//             e.target.value = '';
//             _websocket.send(JSON.stringify(message));
//         };
//     };

//     return (
//         <div className='wrapper'>
//             <NavLink to='/'>
//                 <Button type='primary' size='small'>
//                     {RELOGIN}
//                 </Button>
//             </NavLink>
//             <div className={state.connect === false ? 'nocontent' : 'content'}>
//                 {state.connect === false ? <Preloader /> : mappedMessages()}
//             </div>
//             <input onKeyPress={sendMessage} className='myText' type='text' placeholder='Enter your message...' />
//         </div>
//     );
// };

// export default Main;


// constructor() {
    //         super();
    //         this.state = {
    //             user: 'user',
    //             messages: [],
    //             connect: false,
    //         };

    //         this._websocket = null;
    //         this.chatEnd = React.createRef();
    //     };

    //     componentDidMount() {
    //         this.connect();
    //     };

    //     connect = () => {
    //         this._websocket = new WebSocket('wss://wssproxy.herokuapp.com/');
    //         this._websocket.onopen = () => {
    //             this.setState({ connect: true });
    //         };

    //         this._websocket.onmessage = (e) => {
    //             const messages = JSON.parse(e.data).reverse();
    //             this.setState(
    //                 (state) => ({ messages: [...state.messages, ...messages] }),
    //                 () => this.chatEnd.current.scrollIntoView({ block: 'nearest' })
    //             );
    //         };

    //         this._websocket.onclose = () => {
    //             this.setState({ connect: false });
    //             setTimeout(() => {
    //                 this.connect();
    //             }, 1000);
    //         };
    //     };

    //     goMap = () => {
    //         const newMap = this.state.messages.map((user) => (
    //             <div className={user.from === localStorage.name ? 'message--isme' : 'message'} key={user.time} >
    //                 <div className='message__avatar' >
    //                     <img src={AVATAR} />
    //                 </div>
    //                 <div className='message__content'>
    //                     <div className='message__bubble'>
    //                         <p className='message__text'>{user.message}</p>
    //                     </div>
    //                     <span className='message__sender' ref={this.chatEnd} >{user.from}</span>
    //                 </div>
    //             </div>
    //         ));

    //         return newMap;
    //     };

    //     changeName = (newName = 'user') => {
    //         this.setState({ user: newName });
    //         localStorage.setItem('name', JSON.stringify(newName));
    //     };

    //     sendMessage = (e) => {
    //         if (localStorage.name === undefined) {
    //             localStorage.name = 'Anonymous';
    //         };

    //         let text = e.target.value;
    //         const message = {
    //             message: `${text}`,
    //             from: `${localStorage.name}`,
    //         };

    //         if (e.key === 'Enter') {
    //             e.target.value = '';
    //             this._websocket.send(JSON.stringify(message));
    //         };
    //     };

    //     render() {
    //         return (
    //             <div className='wrapper'>
    //                 <NavLink to='/'>
    //                     <Button type='primary' size='small'>
    //                         {RELOGIN}
    //                     </Button>
    //                 </NavLink>
    //                 <div className={this.state.connect === false ? 'nocontent' : 'content'}>
    //                     {this.state.connect === false ? <Preloader /> : this.goMap()}
    //                 </div>
    //                 <input onKeyPress={this.sendMessage} className='myText' type='text' placeholder='Enter your message...' />
    //             </div>
    //         );
    //     };
    // };

import React from 'react';
import MessageCont from '../Dashboard/MessageCont';
import SendMessageForm from '../Dashboard/SendMessageForm'
import '../Styles/MainStyle.css';


class Main extends React.Component {
    constructor() {
        super();
        this._websocket = null;
        this.state = {
            connect: false,
            messages: [],
            user: 'user',
        };

        this.changeName = this.changeName.bind(this);
        this.getNameFromStorage = this.getNameFromStorage.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        this.connecting = this.connecting.bind(this);

        this.connecting();
    }

    connecting() {
        this._websocket = new WebSocket('wss://wssproxy.herokuapp.com/ ');
        this._websocket.onopen = () => {
            console.log('open');
            this.setState({ connect: true });
            this.getNameFromStorage();
        }
        this._websocket.onmessage = (e) => {
            const mess = JSON.parse(e.data);
            this.setState((state) => ({
                messages: [...state.messages, ...mess],
            }));
        };
        this._websocket.onclose = () => {
            console.log('close');
            this.setState({ messages: [] });
            this.setState({ connect: false });
            setTimeout(this.connectServer(), 5000);
        };
    }

    getNameFromStorage() {
        const newName = JSON.parse(localStorage.getItem('name'));
        if (newName) this.changeName(newName);
    }

    changeName(newName = 'user') {
        localStorage.setItem('name', JSON.stringify(newName));
        this.setState({ user: newName });
    }

    sendMessage(message) {
        this._websocket.send(JSON.stringify(message));
    }

    render() {
        const { messages, user, connect } = this.state;
        return (
            <main className='main'>
                <MessageCont messages={messages} userName={user} connect={connect}/>
                <SendMessageForm
                    user={user}
                    changeName={this.changeName}
                    sendMessage={this.sendMessage}
                />
            </main>
        );
    }
}

export default Main;


import React from 'react';
import { Message } from 'components';

import './Main.scss';

class Main extends React.Component {
    constructor() {
        super();
        this._websocket = null;
        this.state = {
            connect: false,
            messages: [],
            user: 'user',
        };

        this.connecting();
    };

    connecting() {
        this._websocket = new WebSocket('wss://wssproxy.herokuapp.com/ ');
        this._websocket.onopen = () => {
            console.log('open');
            this.setState({ connect: true });
        }
        this._websocket.onmessage = (e) => {
            const mess = JSON.parse(e.data);
            console.log(JSON.parse(e.data));
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

    sendMessage(message) {
        this._websocket.send(JSON.stringify(message));
    }

    render() {
        const { messages, user, connect } = this.state;
        return (
            <main className='main'>
                <Message
                    user={user}
                    avatar='https://i.pinimg.com/236x/af/bb/82/afbb828cb5350d267e6dbeba042e85eb--anonymous-mask-guy-fawkes.jpg'
                    sendMessage={this.sendMessage}
                    date='21:31 sep 2019'
                />
            </main>
        );
    }
}

// const Main = () => (
//     <section className='main'>
//         <Message
//             avatar='https://i.pinimg.com/236x/af/bb/82/afbb828cb5350d267e6dbeba042e85eb--anonymous-mask-guy-fawkes.jpg'
//             text='Просто любое рандомное хз то есть сообщение'
//             date='21:31 sep 2019'
//         />
//         <Message avatar='https://i.pinimg.com/236x/af/bb/82/afbb828cb5350d267e6dbeba042e85eb--anonymous-mask-guy-fawkes.jpg'
//             text='Hello world!'
//             date='21:31 sep 2019'
//             isMe={true}
//             isReaded={true}
//         />
//     </section>
// );

export default Main;
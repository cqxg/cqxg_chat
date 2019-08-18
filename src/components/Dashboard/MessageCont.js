import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Message from '../Dashboard/Message';
import ConnectionMessage from '../Dashboard/ConnectionMessage';

import '../Styles/MainStyle.css';

const ChatEnd = React.createRef();
const scrolling = () => ChatEnd.current.scrollIntoView({ block: 'nearest' });

const MessageCont = ({ messages, user, connect }) => {
    useEffect(scrolling);

    const listItems = ( messages.length === 0 ) ? <div> No messages </div> :
    (
        messages.map( (message) => (
            <Message
                key={message.id}
                messageBlock={message}
                user={user}
            />
        ))
    );

    return (
        <div className='listWrapper'>
            <ConnectionMessage connect={connect}/>
            {listItems}
            <p ref={ChatEnd} />
        </div>
    );
};

MessageCont.propTypes = {
    user: PropTypes.string.isRequired, 
    messages: PropTypes.arrayOf(PropTypes.object),
    connect: PropTypes.bool.isRequired
};

MessageCont.defaultProps = {
    user: 'user',
    messages: [
        {
            time: 70,
            id: '00',
            from: 'user',
            message: 'no messages',
        },
    ],
};

export default MessageCont;

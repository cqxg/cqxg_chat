import React from 'react';
import ReactEmoji from 'react-emoji';

import { AVATAR } from '../../../utils/const';

import './Message.scss';

const Message = ({ message: { text, user }, name }) => {
    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();

    if (user === trimmedName) {
        isSentByCurrentUser = true;
    }

    return (
        <div className={isSentByCurrentUser ? 'message--isme' : 'message'}>
            <div className='message__avatar' >
                <img alt='' src={AVATAR} />
            </div>
            <div className='message__content'>
                <div className='message__bubble'>
                    <p className='message__text'>{ReactEmoji.emojify(text)}</p>
                </div>
                <span className='message__sender'>{user}</span>
            </div>
        </div>
    );
};

export default Message;
import React from 'react';

import Button from '../Button/Button';

import './Input.scss';

const Input = ({ setMessage, sendMessage, message }) => (
    <form className="form">
        <input
            className="input"
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={({ target: { value } }) => setMessage(value)}
            onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
        />
        <Button type='primary' size='small' onClick={e => sendMessage(e)}>
            Send
        </Button>
    </form>
)

export default Input;
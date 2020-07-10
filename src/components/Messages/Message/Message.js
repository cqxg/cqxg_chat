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
    user === '/^(?>(?>([a-f0-9]{1,4})(?>:(?1)){7}|(?!(?:.*[a-f0-9](?>:|$)){8,})((?1)(?>:(?1)){0,6})?::(?2)?)|(?>(?>(?1)(?>:(?1)){5}:|(?!(?:.*[a-f0-9]:){6,})(?3)?::(?>((?1)(?>:(?1)){0,4}):)?)?(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(?>.(?4)){3}))$/iD' ? (
      <div className="greeting">
        <div>
          <div className="message__bubble">
            <p className="message__text">{text}</p>
          </div>
        </div>
      </div>
    ) : (
      <div className={isSentByCurrentUser ? 'message--isme' : 'message'}>
        <div className="message__avatar">
          <img alt="" src={AVATAR} />
        </div>
        <div className="message__content">
          <div className="message__bubble">
            <p className="message__text">{ReactEmoji.emojify(text)}</p>
          </div>
          <span className="message__sender">{user}</span>
        </div>
      </div>
    )
  );
};

export default Message;
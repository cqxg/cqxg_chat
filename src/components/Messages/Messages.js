import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';

const Messages = ({ messages, name }) => (
  <ScrollToBottom>
    {messages.map((message, index) => <div key={index}>qq</div>)}
  </ScrollToBottom>
);

export default Messages;
import React from 'react';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';
import '../Styles/MyMsgStyle.css';

const Message = ({ messageBlock, user }) => {
    const { message, from } = messageBlock;

    return (
        <div className='msgWrapper'>
            <div className='yourMess'>
                <Chip color="primary" label={`${from}`} />
                <div className='msg'>{message}</div>
            </div>
        </div>
    );
};

Message.propTypes = {
    user: PropTypes.string.isRequired,
    messageBlock: PropTypes.shape({
        from: PropTypes.string,
        message: PropTypes.string,
        id: PropTypes.string,
        time: PropTypes.number,
    }).isRequired,
};

export default Message;

import React from 'react';
import PropTypes from 'prop-types';

const ConnectionMessage = ({ connect }) => {
    return !connect ? <div>Waiting for Connection...</div> : null;
};

ConnectionMessage.propTypes = {
    connect: PropTypes.bool.isRequired,
};

export default ConnectionMessage;

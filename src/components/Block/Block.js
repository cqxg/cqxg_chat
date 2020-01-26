import React from 'react';
import classNames from 'classnames'

const Block = ({ children, className }) => (
    <div className={classNames('block', className)}>{children}</div>
);

export default Block;
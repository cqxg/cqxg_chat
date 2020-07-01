import React from 'react';

import online from '../../utils/online.png';

import './Aside.scss';

const AsideBar = ({ users }) => (
    <div className="asideBar">
        {
            users
                ? (
                    <div>
                        <h2>People currently chatting:</h2>
                        <div className="activeContainer">
                            <h3>
                                {users.map(({ name }) => (
                                    <div key={name} className="activeItem">
                                        {name}
                                        <img alt="Online Icon" src={online} />
                                    </div>
                                ))}
                            </h3>
                        </div>
                    </div>
                )
                : null
        }
    </div>
);

export default AsideBar;
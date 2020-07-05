import React from 'react';

import ReloginButton from '../Buttons/ReloginButton';

import online from '../../utils/online.png';

import './InfoBar.scss';

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img className="onlineIcon" src={online} alt="online icon" />
      <span className="desc">Room name:</span>
      <h3>{room}</h3>
    </div>
    <ReloginButton />
  </div>
);

export default InfoBar;

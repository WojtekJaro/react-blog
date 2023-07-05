import React from 'react';
import './Player.css';

const Player = ({image,name}) => {
  return (
    <div className='player-card'>
        <img src={image} alt={name}/>
        <h3>{name}</h3>
    </div>
  )
}

export default Player
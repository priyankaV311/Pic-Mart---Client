import React from 'react'
import './Follower.scss'
import Avatar from '../avatar/Avatar';

const Follower = () => {
  return (
    <div className='Follower'>
      <div className='user-info'>
        <Avatar />
        <h4 className='name'>Demo1</h4>
      </div>
      <h5 className='hover-link follow-link'>Follow</h5>
    </div>
  )
}

export default Follower;
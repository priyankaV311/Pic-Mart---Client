import React from 'react';
import './Avatar.scss';
import userImg from '../../Assets/imgs/user.png'
// import userImg from '../../Assets/img/';

const Avatar = ({src}) => {
	return (
		<div className='Avatar'>
			{/* <img src={src ? src : userImg} alt='user avatar' /> */}
            <img src={src ? src : userImg } alt='user avatar' />
		</div>
	);
};

export default Avatar;

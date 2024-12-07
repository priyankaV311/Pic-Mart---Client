// import React, { useRef, useState } from 'react';
import React, { useRef, useState} from 'react';
import './Navbar.scss';
import Avatar from '../avatar/Avatar';
import { useNavigate } from 'react-router-dom';
import { CiLogout } from 'react-icons/ci';
import LoadingBar from 'react-top-loading-bar';
import { useDispatch, useSelector } from 'react-redux';
// import { setLoading } from '../../redux/slices/appConfigSlice';
import { setLoading } from '../../redux/slices/slices/appConfigSlice';



const Navbar = () => {
	const navigate = useNavigate();
	const myProfile = useSelector(state => state.appConfig.myProfile);

	const handleLogout = () => {

	}
	return (
		<div className='Navbar'>
			<div className='container'>
				<h2 className='banner hover-link' onClick={() => navigate('/')}>
					PicsMart
				</h2>
				<div className='right-side'>
					<div
						className='profile hover-link'
						onClick={() => navigate(`/profile/${myProfile?._id}`)}
					>
						<Avatar src={myProfile?.avatar?.url}/>
					</div>
					<div className='logout hover-link' onClick={handleLogout}>
						
						<CiLogout />
						<p className='logout-text'>logout</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;


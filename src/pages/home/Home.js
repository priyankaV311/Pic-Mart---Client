import React, { useEffect } from 'react'
import './Home.scss';
import { axiosClient } from '../../utils/axiosClient';
import { useDispatch } from 'react-redux';
import Navbar from '../../components/navbar/Navbar';
import { Outlet } from 'react-router-dom';
// import { getMyInfo } from '../../redux/slices/appConfigSlice.js';
import { getMyInfo } from '../../redux/slices/slices/appConfigSlice';


function Home() {
  const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getMyInfo());
	}, [])
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};

export default Home;
import React, { useEffect, useRef } from 'react';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import { Route, Routes } from 'react-router-dom';
// import LoadingBar from 'react-top-loading-bar';
import RequireUser from './components/RequireUser';
import Feed from './components/feed/Feed';
import UpdateProfile from './components/update profile/UpdataProfile';
import Profile from './components/profile/Profile';
import { useSelector } from 'react-redux';
import LoadingBar from 'react-top-loading-bar';


function App() {
    // const isLoading = useSelector((state) => state.appConfigReducer.isLoading);
	const isLoading = useSelector((state) => state.appConfig.isLoading);

	const loadingRef = useRef(null);

	useEffect(() => {
		if (isLoading) {
			loadingRef.current?.continuousStart();
		} else {
			loadingRef.current?.complete();
		}
	}, [isLoading])
	return (
		<>
			<LoadingBar
				height={4}
				color={'var(--accent-color)'}
				ref={loadingRef}
			/>
			<Routes>
				<Route element={<RequireUser />}>
					<Route element={<Home/>}>
						<Route path='/' element={<Feed />} />
						<Route path='/profile/:id' element={<Profile />} />
						<Route
							path='/updateProfile'
							element={<UpdateProfile />}
						/>
					</Route>
				</Route>
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<Signup />} />
			</Routes>
		</>
	);
};

export default App;



import React from 'react';
import { getItem, KEY_ACCESS_TOKEN } from '../utils/LocalStorageManager';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

const RequireUser = () => {
	const user = getItem(KEY_ACCESS_TOKEN);
	return user ? <Outlet /> : <Navigate to='/login' />;
};

export default RequireUser;

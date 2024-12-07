import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { setLoading } from './appConfigSlice';
import { axiosClient } from '../../../utils/axiosClient';

export const getUserProfile = createAsyncThunk(
	'user/getUserProfile',
	async (body, thunkAPI) => {
		try {
			thunkAPI.dispatch(setLoading(true));

			const response = await axiosClient.post(
				'/user/getUserProfile',
				body
			);
			console.log('user profile data fetched', response.result);
			return response.result;
		} catch (err) {
			return Promise.reject(err);
		} finally {
			thunkAPI.dispatch(setLoading(false));
		}
	}
);

const postsSlice = createSlice({
	name: 'postsSlice',
	initialState: {
		userProfile: {},
	},

	extraReducers: (builder) => {
		builder.addCase(getUserProfile.fulfilled, (state, action) => {
			state.userProfile = action.payload;
		});
	},
});

export default postsSlice.reducer;
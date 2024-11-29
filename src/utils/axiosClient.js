import axios from 'axios';
import {
    getItem,
    KEY_ACCESS_TOKEN,
    removeItem,
    setItem,
} from './LocalStorageManager';

export const axiosClient = axios.create({
    baseURL: 'http://localhost:4000/v1',
    withCredentials: true,
});

axiosClient.interceptors.request.use((request) => {
    const accessToken = getItem(KEY_ACCESS_TOKEN);
    request.headers['Authorization'] = `Bearer ${accessToken}`;
    return request;
});

axiosClient.interceptors.response.use((response) => {
    const data = response.data;

    if (data.status === 'ok') {
        return data;
    }

    const originalRequest = response.config;
    const statusCode = data.statusCode;
    const errorMessage = data.message;

    if (
        statusCode === 401 &&
        originalRequest.url === `http://localhost:4000/v1/auth/refreshtoken`
    ) {
        removeItem(KEY_ACCESS_TOKEN);
        window.Location.replace('/login', '_self');
        return Promise.reject(errorMessage);
    }

    if (statusCode === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        const response = axios
            .create({
                withCredentials: true,
                baseURL: 'http://localhost:4000/v1',
            })
            .post('/auth/refreshtoken');

        if (response.data.status === 'ok') {
            setItem(KEY_ACCESS_TOKEN, response.data.result.accessToken);
            console.log(response.data);

            originalRequest.headers[
                'Authorization'
            ] = `Bearer ${response.data.result.accessToken}`;

            return axios(originalRequest);
        }
    }
    return Promise.reject(errorMessage);
});

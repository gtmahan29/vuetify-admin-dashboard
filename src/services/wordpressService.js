import axios from 'axios';

const API_URL = 'https://localhost/wordpress/wp-json/wp/v2';

const wordpressService = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L3dvcmRwcmVzcyIsImlhdCI6MTY5MjQyMjM2MCwibmJmIjoxNjkyNDIyMzYwLCJleHAiOjE2OTMwMjcxNjAsImRhdGEiOnsidXNlciI6eyJpZCI6IjEifX19._6hUDHjeI_KxUFd6Afqw5O3xAuRcWriHekWe1YMGc0s'

const refreshAccessToken = (refreshToken) => {
    return axios.post('/wp-json/jwt-auth/v1/token/refresh', {
        refresh_token: refreshToken,
    })
    .then((response) => {
        const newToken = response.data.token;
        return Promise.resolve(newToken)
    });
}

export {
    wordpressService,
    refreshAccessToken,
};
import axios from 'axios';
import { AUTH_ERROR, AUTH_SIGN_IN, AUTH_SIGN_OUT } from './types';

export const signin = data => {
    /*
       step 1) Use the data and make the HTTP request to our Back-End and send it along
       step 2) Take the Back-End's response (JWT token)
       step 3) Dispatche user just signed up
       step 4) Save the JWT-token to our localstorage
   */
    return async dispatch => {
        try {
            const res = await axios.post('http://127.0.0.1:4000/api/v1/host/signin', data)
            dispatch({
                type: AUTH_SIGN_IN,
                payload: res.data
            })

            localStorage.setItem('JWT_TOKEN', res.data.token)
            localStorage.setItem('HOST_ID', res.data.hostId)
        } catch (err) {
            dispatch({
                type: AUTH_ERROR,
                payload: 'Invalid email or password.'
            })
            console.log('error', err)
        }
    }
}

export const signOut = () => {
    return dispatch => {
        localStorage.removeItem('JWT_TOKEN')

        dispatch({
            type: AUTH_SIGN_OUT,
            payload: ''
        })
    }
}
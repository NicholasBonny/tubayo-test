import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reduxThunk from "redux-thunk";
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import rootReducer from './store';

const jwtToken = localStorage.getItem('JWT_TOKEN')
const hostId = localStorage.getItem('HOST_ID')

ReactDOM.render(
    <Provider store={createStore(rootReducer, {
        auth: {
            token: jwtToken,
            isAuthenticated: jwtToken ? true : false,
            hostId: hostId
        }
    }, applyMiddleware(reduxThunk))} >
        <App />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';

//STORE -> globalized state

//ACTION Increment
// Function that returns an object
const increment = () => {
    return {
        type: 'INCREMENT'
    }
}
const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

//REDUCER
const counter = (state = 0; ) => {

}
//DISPATCH

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

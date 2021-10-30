import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

// OBJECT SET TO STATE
let feedbackObject = {
    feeling: '',
    understanding: '',
    support: '',
    comments: ''
}

// REDUCER
const feedbackReducer = (state = feedbackObject, action) => {
    if (action.type === 'ADD_FEELING') {
        return {...state, feeling: action.payload}
    } else if (action.type === 'ADD_UNDERSTANDING') {
        return {...state, understanding: action.payload}
    } else if (action.type === 'ADD_SUPPORT') {
        return {...state, support: action.payload}
    } else if (action.type === 'ADD_COMMENTS') {
        return {...state, comments: action.payload}
    }
    return state
}

// STORE
const feedbackStore = createStore(
    combineReducers({
        feedbackReducer
    }),
    applyMiddleware(logger)
);

ReactDOM.render(
    <Provider store={feedbackStore}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
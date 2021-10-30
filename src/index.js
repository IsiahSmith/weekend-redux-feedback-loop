import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { combineReducers } from 'redux';
import { applyMiddleware } from 'redux';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


let feedbackObject = {
    feeling: '',
    understanding: '',
    support: '',
    comments: ''
}

// REDUCER
const feedbackReducer = (state = feedbackObject, action) => {
    if (action.type === 'ADD_FEEDBACK') {
        return action.payload
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

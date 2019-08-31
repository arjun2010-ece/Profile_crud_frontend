import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import { composeWithDevTools  } from 'redux-devtools-extension';
import thunk from 'redux-thunk';


const initialState = {};
const middleware = [thunk];

const store = createStore(
                rootReducer,
                initialState,
                composeWithDevTools(applyMiddleware(...middleware))
                );


ReactDOM.render(
<Provider store={store}>
 <App />
</Provider>
, document.getElementById('root'));

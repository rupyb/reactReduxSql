import React from 'react';
import ReactDOM from 'react-dom';

import './styles/stylesheet.css';
import {BrowserRouter} from 'react-router-dom';
import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from './redux/reducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import App from './Components/App';
import {database} from './database/config';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,applyMiddleware(thunk));

ReactDOM.render(
<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>, 
document.getElementById('root')
);

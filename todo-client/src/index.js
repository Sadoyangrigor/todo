import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import './assets/style.css';
import Routes from './Routes';
import { createStore,applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './reducer'
import {redirect} from './reducer/redirect';
import { createBrowserHistory } from "history";
const browserHistory = createBrowserHistory();

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk),applyMiddleware(redirect)));
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history} >
            <Routes/>
        </Router>
    </Provider>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import './index.css';
import App from './app';
import getReducers from './store/reducer';

ReactDOM.render(
  <Provider
    store={createStore(
      getReducers(),
      applyMiddleware(process.env.NODE_ENV === 'development' && logger),
    )}
  >
    <App />
  </Provider>,
  document.getElementById('root'),
);

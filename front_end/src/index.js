import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import commonReducer from "./reducer/commonReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const middlewares = [thunk];
if (process.env.NODE_ENV === `development`) {
    const { logger } = require(`redux-logger`);
    middlewares.push(logger);
}

const composeEnhancers = composeWithDevTools({});
    function configureStore() {
      return createStore(commonReducer, composeEnhancers(applyMiddleware(...middlewares)));
    }
const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

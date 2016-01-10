import React, { Component } from 'react-native';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import devTools from 'remote-redux-devtools';

import middleware from '../libs/reduxMiddleware';
import reducer from '../modules/reducers';
import Routes from '../routes';

let finalCreateStore;
if (__DEV__) {
  console.log('Remote Redux Dev Tools Enabled');
  finalCreateStore = compose(
    applyMiddleware(middleware),
    devTools(),
  )(createStore);
} else {
  finalCreateStore = applyMiddleware(middleware)(createStore);
}

const store = finalCreateStore(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

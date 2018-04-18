import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore.js'
import AsyncApp from './AsyncApp.js';

let store = configureStore()
class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <AsyncApp />
      </Provider>
    );
  }
}
export default Root
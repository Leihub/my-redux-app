import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Root from './containers/Root'

// let store = createStore(todoApp)
ReactDOM.render(
    <Root />,
  document.getElementById('root'));
registerServiceWorker();
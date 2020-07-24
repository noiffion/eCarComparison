import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import CarBoard from './Containers/CarBoard';
import * as serviceWorker from './ServiceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Router history={createBrowserHistory()}>
      <CarBoard />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './tema/main.scss';
import {RibarnicaOrka} from './orka';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <RibarnicaOrka />
  </React.StrictMode>,
  document.getElementById('wrapper')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

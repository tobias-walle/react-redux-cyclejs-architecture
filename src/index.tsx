import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './app/app';
import { startCycleApp } from './app/app.cycle';

startCycleApp();
ReactDOM.render(
  <App/>,
  document.getElementById('app'),
);

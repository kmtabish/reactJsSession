import 'babel-polyfill';
import React from 'react';
import {Router, browserHistory} from 'react-router';
import {render} from 'react-dom';
import routes from './routes';

import App from './component/app';

render(
  <Router routes={routes} history={browserHistory} />,
  document.getElementById("app")
);
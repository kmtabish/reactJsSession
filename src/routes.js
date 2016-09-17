import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './component/app';
import Contact from './component/Contact';
import About from './component/About';
import HomePage from './component/HomePage';
//import Nest from './component/Nest';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="contact" component={Contact} />
    <Route path="about" component={About} onEnter={() => {
			console.log("About to enter /about");
		}}>
    </Route>
  </Route>
)
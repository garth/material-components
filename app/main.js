import 'babel/polyfill';

// load the css
require('normalize.css/normalize.css');
require('../lib/index.css');

// support tap events
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// load signals
import './signals/route';

// start the router
import router from './router';
router.trigger();

// mount the application
import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from 'cerebral-react';
import controller from './controller';
import Application from './components/application.js';

ReactDOM.render(<Container controller={controller} app={Application}/>, document.getElementById('root'));

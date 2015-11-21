import 'babel/polyfill';

// load the css
require('normalize.css/normalize.css');
require('../lib/index.css');

// support tap events
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// load signals
import './signals/calendar';
import './signals/checkbox';
import './signals/datePicker';
import './signals/dialog';
import './signals/input';
import './signals/localeMenu';
import './signals/menu';
import './signals/route';
import './signals/screen';
import './signals/select';
import './signals/sidenav';
import './signals/spinner';

// hookup the screen event to the signal
import controller from './controller';
import { events } from '../lib';
events.responsive.addListener(screen => controller.signals.screenChanged({ screen }));

// start the router
import router from './router';
router.trigger();

// mount the application
import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from 'cerebral-react';
import Application from './components/application.js';

ReactDOM.render(<Container controller={controller} app={Application}/>, document.getElementById('root'));

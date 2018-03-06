import 'babel/polyfill';

// load the css
require('normalize.css/normalize.css');
require('../lib/index.css');

// support tap events
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// hookup the screen event to the signal
import controller from './controller';
import { events } from '../lib';
events.responsive.addListener(screen => controller.getSignal('screenChanged')({ screen }));

// mount the application
import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from '@cerebral/react';
import Application from './components/application.js';

ReactDOM.render(
  <Container controller={controller}>
    <Application />
  </Container>,
  document.getElementById('root')
);

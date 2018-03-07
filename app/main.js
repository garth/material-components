import 'babel/polyfill';

// load the css
require('normalize.css/normalize.css');
require('../lib/index.css');

// mount the application
import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from '@cerebral/react';
import controller from './controller';
import Application from './components/application.js';

ReactDOM.render(
  <Container controller={controller}>
    <Application />
  </Container>,
  document.getElementById('root')
);

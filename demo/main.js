import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

// load the css
require('normalize.css/normalize.css');
require('../lib/index.css');

// support tap events
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import { Button } from '../lib';

// define the app
class Application extends Component {

  static displayName = 'Application';

  static childContextTypes = {
    componentStyle: React.PropTypes.object
  };

  getChildContext() {
    return {
      componentStyle: {
        primaryColor: '#E91E63',
        primaryFontColor: '#FFF',
        secondaryColor: '#303F9F',
        secondaryFontColor: '#FFF'
      }
    };
  }

  render() {
    return (
      <div>
        <h1>Material Components - Demo</h1>
        <p>
          For source and documentation please see the <a href="https://github.com/garth/material-components">Github Repository</a>.
        </p>
        <h2>Buttons</h2>
        <p>
          <Button>Normal</Button>
          <Button primary={true}>Primary</Button>
          <Button flat={true}>Flat</Button>
          <Button primary={true} flat={true}>Primary Flat</Button>
        </p>
      </div>
    );
  }
}

// render the app
ReactDOM.render(<Application/>, document.getElementById('root'));

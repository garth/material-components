import React from 'react';
import Example from './example';

export default () => (
  <div>
    <p>
      Some styles and transitions are defined in css and must be included in your project. With webpack simply use the{' '}
      <code>css-loader</code> plugin and include the following line in your main.js:
    </p>

    <Example
      code={`
import 'material-components/lib/index.css';
        `}
    />

    <p>
      In the root component you need to define the styles for material-components. These only need to be defined once
      and should then work wherever material-components are used in your app. For color choices please see{' '}
      <a href="https://www.google.com/design/spec/style/color.html#color-color-palette">
        https://www.google.com/design/spec/style/color.html#color-color-palette
      </a>
    </p>

    <Example
      code={`
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Application extends Component {

  static childContextTypes = {
    componentStyle: PropTypes.object
  };

  getChildContext() {
    return {
      componentStyle: {
        primaryColor: '#FFC107',
        primaryFontColor: 'rgba(0, 0, 0, 0.7)',
        secondaryColor: '#009688',
        secondaryFontColor: 'rgba(255, 255, 255, 0.9)',
        errorColor: '#C00',
        successColor: '#090',
        typographyColor: '#212121'
      }
    };
  }

  render() {
    return (
      <div>
        The app goes here
      </div>
    );
  }
}
        `}
    />
  </div>
);

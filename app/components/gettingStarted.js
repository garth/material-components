import React, { Component } from 'react';
import Example from './example';

export default class GettingStarted extends Component {

  static displayName = 'GettingStarted';

  render() {
    return (
      <div>
        <p>
          material-components is dependent on the <code>react-tap-event-plugin</code>,
          so be sure to add the following in your main.js:
        </p>

        <Example code={`
// support tap events
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
        `}/>

        <p>
          Some styles and transitions are defined in css and must be included in your project. With
          webpack simply use the <code>css-loader</code> plugin and include the following line in your main.js:
        </p>

        <Example code={`
require('material-components/lib/index.css');
        `}/>

        <p>
          In the root component you need to define the styles for material-components. These only need to
          be defined once and should then work wherever material-components are used in your app. For color
          choices please see <a href="https://www.google.com/design/spec/style/color.html#color-color-palette">
            https://www.google.com/design/spec/style/color.html#color-color-palette
          </a>
        </p>

        <Example code={`
import React, { Component, PropTypes } from 'react';

export default class Application extends Component {

  static displayName = 'Application';

  static childContextTypes = {
    componentStyle: React.PropTypes.object
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
        `}/>

      </div>
    );
  }
}

Material Components
===================

Stateless UI components for react that follow material design.

Demo
----

Take a look at the [demo page](http://garth.github.io/material-components/demo).

Installation
------------

```
npm install --save-dev material-components
```

Configuration
-------------

material-components is dependent on the `react-tap-event-plugin`, so be sure to add the following in your main.js:

```js
// support tap events
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
```

Some styles and transitions are defined in css and must be included in your project. With webpack simply use the `css-loader` plugin and include the following line in your main.js:

```js
require('material-components/lib/index.css');
```

In the root component you need to define the styles for material-components. These only need to be defined once and should then work wherever material-components are used in your app. For color choices please see https://www.google.com/design/spec/style/color.html#color-color-palette

```js
import React, { Component, PropTypes } from 'react';

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
        The app goes here
      </div>
    );
  }
}

export default Application;
```

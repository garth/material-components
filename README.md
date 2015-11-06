Material Components
===================

Stateless UI components for react that follow material design.

Introduction
------------

material-components is a library of [React](https://facebook.github.io/react/) (0.14.0) user interface components based on [material design](https://www.google.com/design/spec/).

Unlike some other React based component libraries, material-components are completely stateless making them an ideal companion to libraries such as [Cerebral](http://christianalfoni.com/cerebral/) or [Redux](http://rackt.github.io/redux/). But they can also be used with other flux based frameworks or even without a framework at all.

The development of material-components has been sponsored by [Elastic Time](http://www.elastictime.com/).

Demo & Code Examples
--------------------

Take a look at the [demo page](http://garth.github.io/material-components/demo) for code examples.

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

export default Application;
```

Contribute
----------

Fork the repository

* `npm install`
* `npm run dev` runs dev mode which watches for changes and auto lints, tests and builds. Visit http://localhost:8080/webpack-dev-server/index.html to view the demo app.
* `npm test` runs the tests
* `npm run lint` lints the code
* `npm run build` compiles to es5

License
-------

MIT

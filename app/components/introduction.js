import React from 'react';
import { Typ } from '../../lib';

export default () => (
  <div>
    <Typ headline>material-components</Typ>
    <p>
      material-components is a library of <a href="https://facebook.github.io/react/">React</a> (16.0.0) user interface
      components based on <a href="https://www.google.com/design/spec/">material design</a>.
    </p>
    <p>
      material-components are completely stateless making them an ideal companion to libraries such as{' '}
      <a href="http://christianalfoni.com/cerebral/">Cerebral</a> or <a href="http://rackt.github.io/redux/">Redux</a>.
      But they can also be used with other flux based frameworks or even without a framework at all.
    </p>
    <p>
      For source code please see the <a href="https://github.com/garth/material-components">GitHub Repository</a>.
    </p>
  </div>
);

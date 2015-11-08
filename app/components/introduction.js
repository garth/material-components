import React, { Component } from 'react';

export default class Introduction extends Component {

  static displayName = 'Introduction';

  static propTypes = {
  };

  render() {

    return (
      <div>
        <p>
          material-components is a library of <a href="https://facebook.github.io/react/">React</a> (0.14.0) user
          interface components based on <a href="https://www.google.com/design/spec/">material design</a>.
        </p>
        <p>
          Unlike some other React based component libraries,
          material-components are completely stateless making them an ideal companion to libraries such
          as <a href="http://christianalfoni.com/cerebral/">Cerebral</a> or <a href="http://rackt.github.io/redux/">Redux</a>.
          But they can also be used with other flux based frameworks or even without a framework at all.
        </p>
        <p>
          For source code, installation and configuration info please see
          the <a href="https://github.com/garth/material-components">GitHub Repository</a>.
        </p>
        <p>
          The development of material-components has been sponsored
          by <a href="http://www.elastictime.com/">Elastic Time</a>.
        </p>
      </div>
    );
  }
}

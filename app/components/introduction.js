import React, { Component } from 'react';
import Example from './example';
import { Typ } from '../../lib';

export default class Introduction extends Component {

  static displayName = 'Introduction';

  render() {
    return (
      <div>
        <Typ headline>material-components</Typ>
        <p>
          material-components is a library of <a href="https://facebook.github.io/react/">React</a> (15.0.0) user
          interface components based on <a href="https://www.google.com/design/spec/">material design</a>.
        </p>
        <p>
          material-components are completely stateless making them an ideal companion to libraries such
          as <a href="http://christianalfoni.com/cerebral/">Cerebral</a> or <a href="http://rackt.github.io/redux/">Redux</a>.
          But they can also be used with other flux based frameworks or even without a framework at all.
        </p>
        <p>
          For source code please see
          the <a href="https://github.com/garth/material-components">GitHub Repository</a>.
        </p>
        <p>
          The development of material-components has been sponsored
          by <a href="http://www.elastictime.com/">Elastic Time</a>.
        </p>
        <Typ headline>ui-driver</Typ>
        <p>
          If you're using material-components with Cerebral then checkout
          the <a href="https://github.com/garth/ui-driver">ui-driver</a> to find out how you can turn this:
        </p>
        <Example code={`
<Select
  label="Options"
  value={selectedValue}
  options={options}
  isError={isError}
  message="Please select"
  isOpen={isSelectOpen}
  onOpen={setOpenState}
  onChange={optionSelected}
  onClose={setClosedState}/>
        `}/>
        <p>
          into this:
        </p>
        <Example code={`
<Select ...bindings.selectProps('options', options)/>
        `}/>
        <p>
          The ui-driver will also validate and typecast various different input types including strings, emails,
          passwords, numbers, times and more.
        </p>
      </div>
    );
  }
}

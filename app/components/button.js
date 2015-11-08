import React, { Component } from 'react';
import Example from './example';
import { Button } from '../../lib';

export default class ButtonDemo extends Component {

  static displayName = 'Button';

  render() {
    return (
      <div>
        <Example code={`
import { Button } from 'material-components';
        `}/>
        <Example code={`
// enabled buttons
<Button onTouchTap={onClick}>Normal</Button>
<Button onTouchTap={onClick} primary>Primary</Button>
<Button onTouchTap={onClick} flat>Flat</Button>
<Button onTouchTap={onClick} primary flat>Primary Flat</Button>
        `}/>
        <p>
          <Button onTouchTap={e => {}}>Normal</Button>
          <Button onTouchTap={e => {}} primary>Primary</Button>
          <Button onTouchTap={e => {}} flat>Flat</Button>
          <Button onTouchTap={e => {}} primary flat>Primary Flat</Button>
        </p>
        <Example code={`
// disabled buttons
<Button>Normal</Button>
<Button primary>Primary</Button>
<Button flat>Flat</Button>
<Button primary flat>Primary Flat</Button>
        `}/>
        <p>
          <Button>Normal</Button>
          <Button primary>Primary</Button>
          <Button flat>Flat</Button>
          <Button primary flat>Primary Flat</Button>
        </p>
      </div>
    );
  }
}

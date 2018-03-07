import React from 'react';
import Example from './example';
import { Button } from '../../lib';

export default () => (
  <div>
    <Example
      code={`
import { Button } from 'material-components';
        `}
    />
    <Example
      code={`
// enabled buttons
<Button onClick={onClick}>Normal</Button>
<Button onClick={onClick} primary>Primary</Button>
<Button onClick={onClick} flat>Flat</Button>
<Button onClick={onClick} primary flat>Primary Flat</Button>
        `}
    />
    <p>
      <Button onClick={e => {}}>Normal</Button>
      <Button onClick={e => {}} primary>
        Primary
      </Button>
      <Button onClick={e => {}} flat>
        Flat
      </Button>
      <Button onClick={e => {}} primary flat>
        Primary Flat
      </Button>
    </p>
    <Example
      code={`
// disabled buttons
<Button>Normal</Button>
<Button primary>Primary</Button>
<Button flat>Flat</Button>
<Button primary flat>Primary Flat</Button>
        `}
    />
    <p>
      <Button>Normal</Button>
      <Button primary>Primary</Button>
      <Button flat>Flat</Button>
      <Button primary flat>
        Primary Flat
      </Button>
    </p>
  </div>
);

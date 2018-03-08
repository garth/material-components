import React from 'react';
import Example from './example';

export default () => (
  <div>
    <Example
      code={`
import { Appbar } from 'material-components';
        `}
    />
    <Example
      code={`
<Appbar fixed>
  <Appbar.Container>
    <Appbar.Button><Icon name="menu"/></Appbar.Button>
    <Appbar.Title>Material Components</Appbar.Title>
  </Appbar.Container>
  <Appbar.Container>
    <Appbar.Button
      onClick={() => location.href='https://github.com/garth/material-components'}>
      <Icon name="github"/>
    </Appbar.Button>
    <Appbar.Button><Icon name="more_vert"/></Appbar.Button>
    <Menu rightAlign isOpen={showMoreMenu} onClose={hideMoreMenuFunc}>
      <Menu.Item>Option A</Menu.Item>
      <Menu.Item>Option B</Menu.Item>
    </Menu>
  </Appbar.Container>
</Appbar>
        `}
    />
    <p>See the appbar above.</p>
    <p>
      When using a darker primary color, try using <code>{'<Appbar.Button lightWaves>X</Appbar.Button>'}</code>
    </p>
  </div>
);

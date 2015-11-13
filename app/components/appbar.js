import React, { Component } from 'react';
import Example from './example';

export default class Appbar extends Component {

  static displayName = 'Appbar';

  render() {
    return (
      <div>
        <Example code={`
import { Appbar } from 'material-components';
        `}/>
        <Example code={`
<Appbar fixed>
  <Appbar.Button style={{ float: 'left' }}><Icon name="menu"/></Appbar.Button>
  <Appbar.Title>Material Components</Appbar.Title>
  <div style={{ float: 'right' }}>
    <Appbar.Button
      onTouchTap={() => location.href='https://github.com/garth/material-components'}>
      <Icon name="github"/>
    </Appbar.Button>
    <Appbar.Button><Icon name="more_vert"/></Appbar.Button>
    <Menu rightAlign isOpen={showMoreMenu} onClose={hideMoreMenuFunc}>
      <Menu.Item>Option A</Menu.Item>
      <Menu.Item>Option B</Menu.Item>
    </Menu>
  </div>
</Appbar>
        `}/>
        <p>See the appbar above.</p>
        <p>
          When using a darker primary color, try
          using <code>{'<Appbar.Button lightWaves>X</Appbar.Button>'}</code>
        </p>
      </div>
    );
  }
}

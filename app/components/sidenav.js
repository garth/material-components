import React, { Component } from 'react';
import Example from './example';
import Icon from './icon';
import { Sidenav } from '../../lib';

export default class SidenavDemo extends Component {

  static displayName = 'Sidenav';

  render() {
    return (
      <div>
        <Example code={`
import { Sidenav } from 'material-components';
        `}/>
        <Example code={`
<Sidenav isOpen={sidenavOpen} onClose={closeSidenavFunc}>
  <Sidenav.Title showCloseButton>Menu</Sidenav.Title>
  <Sidenav.Item showIcon icon={<Icon name="user"/>} onTouchTap={itemSelected}>Option A</Sidenav.Item>
  <Sidenav.Item showIcon icon={<Icon name="dashboard"/>} onTouchTap={itemSelected} selected>Option B</Sidenav.Item>
  <Sidenav.Separator/>
  <Sidenav.Item showIcon icon={<Icon name="cog"/>} onTouchTap={itemSelected}>Settings</Sidenav.Item>
</Sidenav>
        `}/>
        <p>See the sidenav above.</p>
        <p>It's also possible to have a mini sidenav that is always on display.</p>
        <Example code={`
<Sidenav mini>
  <Sidenav.Item showIcon icon={<Icon name="user"/>} onTouchTap={itemSelected}/>
  <Sidenav.Item showIcon icon={<Icon name="dashboard"/>} onTouchTap={itemSelected} selected/>
  <Sidenav.Separator/>
  <Sidenav.Item showIcon icon={<Icon name="settings"/>} onTouchTap={itemSelected}/>
</Sidenav>
<div style={{ marginLeft: '60px' }}>
  Page Content
</div>
        `}/>
        <div className="paper1" style={{
          height: '200px',
          margin: '16px 0'
        }}>
          <Sidenav mini style={{
            float: 'left',
            position: 'relative',
            top: '0',
            height: '200px'
          }}>
            <Sidenav.Item showIcon icon={<Icon name="user"/>}/>
            <Sidenav.Item showIcon icon={<Icon name="dashboard"/>} selected/>
            <Sidenav.Separator/>
            <Sidenav.Item showIcon icon={<Icon name="settings"/>}/>
          </Sidenav>
          <div style={{
            padding: '16px',
            marginLeft: '60px'
          }}>
            Page Content
          </div>
        </div>
      </div>
    );
  }
}

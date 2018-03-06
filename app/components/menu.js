import React from 'react';
import { connect } from '@cerebral/react';
import Example from './example';
import { Button, Menu } from '../../lib';
import Icon from './icon';
import { state, signal } from 'cerebral/tags';

const MenuDemo = ({ menu, simpleMenuClosed, simpleMenuOpened, menuOpened, menuClosed, selectMenuOption }) => (
  <div>
    <Example
      code={`
import { Menu } from 'material-components';
        `}
    />
    <Example
      code={`
<Menu isOpen={showSimpleMenuProp} onClose={hideSimpleMenuFunc}>
  <Menu.Item onTouchTap={itemClicked}>Simple Menu Item</Menu.Item>
  <Menu.Item onTouchTap={itemClicked}>Other Option</Menu.Item>
</Menu>

<Menu rightAlign isOpen={showMenuProp} onClose={hideMenuFunc}>
  <Menu.Item showIcon icon={<Icon name="settings"/>} onTouchTap={itemClicked}>Settings</Menu.Item>
  <Menu.Item showIcon onTouchTap={itemClicked}>No Icon</Menu.Item>
  <Menu.Separator/>
  <Menu.Item showIcon selected={selectedOption===1} onTouchTap={() => setSelectedOption(1)}>Option 1</Menu.Item>
  <Menu.Item showIcon selected={selectedOption===2} onTouchTap={() => setSelectedOption(2)}>Option 2</Menu.Item>
</Menu>
        `}
    />
    <div style={{ margin: '24px 0' }}>
      <Menu isOpen={menu.showSimpleMenu} onClose={() => simpleMenuClosed()}>
        <Menu.Item>Simple Menu Item</Menu.Item>
        <Menu.Item>Other Option</Menu.Item>
      </Menu>
      <Button style={{ margin: '0' }} primary onTouchTap={() => simpleMenuOpened()}>
        Simple Menu
      </Button>

      <Button style={{ margin: '0 16px' }} primary onTouchTap={() => menuOpened()}>
        Menu
      </Button>
      <Menu rightAlign isOpen={menu.showMenu} onClose={() => menuClosed()}>
        <Menu.Item showIcon icon={<Icon name="settings" />}>
          Settings
        </Menu.Item>
        <Menu.Item showIcon>No Icon</Menu.Item>
        <Menu.Separator />
        <Menu.Item showIcon selected={menu.selectedOption === 1} onTouchTap={() => selectMenuOption({ value: 1 })}>
          Option 1
        </Menu.Item>
        <Menu.Item showIcon selected={menu.selectedOption === 2} onTouchTap={() => selectMenuOption({ value: 2 })}>
          Option 2
        </Menu.Item>
      </Menu>
    </div>
  </div>
);

export default connect(
  {
    menu: state`demos.menu`,
    simpleMenuClosed: signal`simpleMenuClosed`,
    simpleMenuOpened: signal`simpleMenuOpened`,
    menuOpened: signal`menuOpened`,
    menuClosed: signal`menuClosed`,
    selectMenuOption: signal`selectMenuOption`
  },
  MenuDemo
);

import React, { Component, PropTypes } from 'react';
import { Decorator as State } from 'cerebral-react';
import Icon from './icon';

import { Appbar, Button, Menu, Sidenav } from '../../lib';

@State({
  sidenavOpen: ['sidenavOpen'],
  showMoreMenu: ['showMoreMenu'],
  currentPage: ['route', 'page'],
  title: ['route', 'title']
})
export default class Application extends Component {

  static displayName = 'Application';

  static childContextTypes = {
    componentStyle: PropTypes.object
  };

  static propTypes = {
    signals: PropTypes.object,
    sidenavOpen: PropTypes.bool,
    showMoreMenu: PropTypes.bool,
    currentPage: PropTypes.string,
    title: PropTypes.string
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

  componentDidUpdate({ currentPage }) {
    if (currentPage !== this.props.currentPage) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    const {
      currentPage,
      signals,
      sidenavOpen,
      showMoreMenu,
      title
    } = this.props;

    const RouteComponent = require('./' + currentPage);

    return (
      <div>
        <Sidenav isOpen={sidenavOpen} onClose={() => signals.sidenavClosed()}>
          <Sidenav.Title showCloseButton>Material Components</Sidenav.Title>
          {[
            { icon: 'directions', page: 'introduction', title: 'Introduction', signal: signals.introductionPageOpened },
            { icon: 'tune', page: 'gettingStarted', title: 'Getting Started', signal: signals.gettingStartedPageOpened },
            { separator: true },
            { icon: 'layers', page: 'paper', title: 'Paper', signal: signals.paperPageOpened },
            { icon: 'format_size', page: 'typography', title: 'Typography', signal: signals.typographyPageOpened },
            { icon: 'border_top', page: 'appbar', title: 'Appbar', signal: signals.appbarPageOpened },
            { icon: 'menu', page: 'sidenav', title: 'Sidenav', signal: signals.sidenavPageOpened },
            { icon: 'content_paste', page: 'form', title: 'Form', signal: signals.formPageOpened },
            { icon: 'crop_7_5', page: 'button', title: 'Button', signal: signals.buttonPageOpened },
            { icon: 'edit', page: 'input', title: 'Input', signal: signals.inputPageOpened },
            { icon: 'arrow_drop_down', page: 'select', title: 'Select', signal: signals.selectPageOpened },
            { icon: 'check_box', page: 'checkbox', title: 'Checkbox', signal: signals.checkboxPageOpened },
            { icon: 'view_compact', page: 'gridSystem', title: 'Grid System', signal: signals.gridSystemPageOpened },
            { icon: 'more_vert', page: 'menu', title: 'Menu', signal: signals.menuPageOpened },
            { icon: 'picture_in_picture', page: 'dialog', title: 'Dialog', signal: signals.dialogPageOpened },
            { icon: 'event_available', page: 'datePicker', title: 'Date Picker', signal: signals.datePickerPageOpened },
            { icon: 'reorder', page: 'table', title: 'Table', signal: signals.tablePageOpened },
            { icon: 'sync', page: 'spinner', title: 'Spinner', signal: signals.spinnerPageOpened },
            { icon: 'event', page: 'calendar', title: 'Calendar', signal: signals.calendarPageOpened },
            { separator: true },
            { icon: 'devices', page: 'responsiveEvents', title: 'Responsive Events', signal: signals.responsiveEventsPageOpened }
          ].map((menu, i) => {
            return menu.separator ? (
              <Sidenav.Separator key={i}/>
            ) : (
              <Sidenav.Item
                key={i}
                showIcon
                icon={<Icon name={menu.icon}/>}
                selected={menu.page === currentPage}
                onTouchTap={() => menu.signal()}>{menu.title}</Sidenav.Item>
            );
          })}
        </Sidenav>
        <Appbar fixed>
          <Appbar.Button style={{ float: 'left' }} onTouchTap={() => signals.sidenavOpened()}>
            <Icon name="menu"/>
          </Appbar.Button>
          <Appbar.Title>{title}</Appbar.Title>
          <div style={{ float: 'right' }}>
            <Appbar.Button
              onTouchTap={() => location.href='https://github.com/garth/material-components'}>
              <Icon name="github"/>
            </Appbar.Button>
            <Appbar.Button onTouchTap={() => signals.moreMenuOpened()}>
              <Icon name="more_vert"/>
            </Appbar.Button>
            <Menu rightAlign isOpen={showMoreMenu} onClose={() => signals.moreMenuClosed()}>
              <Menu.Item>Option A</Menu.Item>
              <Menu.Item>Option B</Menu.Item>
            </Menu>
          </div>
        </Appbar>
        <div style={{ padding: '24px', maxWidth: '950px' }}>
          <RouteComponent/>
        </div>
      </div>
    );
  }
}

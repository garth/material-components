import React, { Component, PropTypes } from 'react';
import { Decorator as State } from 'cerebral-react';
import Icon from './icon';

import { Appbar, Button, Menu, Sidenav } from '../../lib';

@State({
  currentPage: ['route', 'page'],
  locale: ['locale'],
  showLocaleMenu: ['showLocaleMenu'],
  sidenavOpen: ['sidenavOpen'],
  title: ['route', 'title']
})
export default class Application extends Component {

  static displayName = 'Application';

  static childContextTypes = {
    componentStyle: PropTypes.object
  };

  static propTypes = {
    currentPage: PropTypes.string,
    locale: PropTypes.string,
    showLocaleMenu: PropTypes.bool,
    sidenavOpen: PropTypes.bool,
    signals: PropTypes.object,
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
      locale,
      showLocaleMenu,
      sidenavOpen,
      signals,
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
            { page: 'appbar', icon: 'border_top', title: 'Appbar', signal: signals.appbarPageOpened },
            { page: 'button', icon: 'crop_7_5', title: 'Button', signal: signals.buttonPageOpened },
            { page: 'calendar', icon: 'event', title: 'Calendar', signal: signals.calendarPageOpened },
            { page: 'checkbox', icon: 'check_box', title: 'Checkbox', signal: signals.checkboxPageOpened },
            { page: 'datePicker', icon: 'event_available', title: 'Date Picker', signal: signals.datePickerPageOpened },
            { page: 'dialog', icon: 'picture_in_picture', title: 'Dialog', signal: signals.dialogPageOpened },
            { page: 'form', icon: 'content_paste', title: 'Form', signal: signals.formPageOpened },
            { page: 'gridSystem', icon: 'view_compact', title: 'Grid System', signal: signals.gridSystemPageOpened },
            { page: 'input', icon: 'edit', title: 'Input', signal: signals.inputPageOpened },
            { page: 'menu', icon: 'more_vert', title: 'Menu', signal: signals.menuPageOpened },
            { page: 'paper', icon: 'layers', title: 'Paper', signal: signals.paperPageOpened },
            { page: 'select', icon: 'arrow_drop_down', title: 'Select', signal: signals.selectPageOpened },
            { page: 'sidenav', icon: 'menu', title: 'Sidenav', signal: signals.sidenavPageOpened },
            { page: 'spinner', icon: 'sync', title: 'Spinner', signal: signals.spinnerPageOpened },
            { page: 'table', icon: 'reorder', title: 'Table', signal: signals.tablePageOpened },
            { page: 'typography', icon: 'format_size', title: 'Typography', signal: signals.typographyPageOpened },
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
            <Appbar.Button onTouchTap={() => signals.localeMenuOpened()}>
              <Icon name="globe"/>
            </Appbar.Button>
            <Menu rightAlign isOpen={showLocaleMenu} onClose={() => signals.localeMenuClosed()}>
              <Menu.Item showIcon onTouchTap={() => signals.localeSelected({ locale: 'de' })} selected={locale === 'de'}>Deutsch</Menu.Item>
              <Menu.Item showIcon onTouchTap={() => signals.localeSelected({ locale: 'en' })} selected={locale === 'en'}>English</Menu.Item>
            </Menu>
          </div>
        </Appbar>
        <div
          style={{
            fontSize: '16px',
            padding: '24px',
            maxWidth: '950px',
            margin: '0 auto'
          }}>
          <RouteComponent/>
        </div>
      </div>
    );
  }
}

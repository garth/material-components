import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from '@cerebral/react';
import { state, signal } from 'cerebral/tags';
import Icon from './icon';

import { Appbar, Button, Menu, Sidenav } from '../../lib';

class Application extends Component {
  static childContextTypes = {
    componentStyle: PropTypes.object
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
      title,
      sidenavClosed,
      introductionPageOpened,
      gettingStartedPageOpened,
      appbarPageOpened,
      buttonPageOpened,
      calendarPageOpened,
      checkboxPageOpened,
      datePickerPageOpened,
      dialogPageOpened,
      formPageOpened,
      gridSystemPageOpened,
      inputPageOpened,
      menuPageOpened,
      paperPageOpened,
      selectPageOpened,
      sidenavPageOpened,
      spinnerPageOpened,
      tablePageOpened,
      typographyPageOpened,
      localeMenuClosed,
      localeMenuOpened,
      localeSelected,
      sidenavOpened
    } = this.props;

    const RouteComponent = require('./' + currentPage);

    return (
      <div>
        <Sidenav isOpen={sidenavOpen} onClose={() => sidenavClosed()}>
          <Sidenav.Title showCloseButton>Material Components</Sidenav.Title>
          {[
            { icon: 'directions', page: 'introduction', title: 'Introduction', signal: introductionPageOpened },
            {
              icon: 'tune',
              page: 'gettingStarted',
              title: 'Getting Started',
              signal: gettingStartedPageOpened
            },
            { separator: true },
            { page: 'appbar', icon: 'border_top', title: 'Appbar', signal: appbarPageOpened },
            { page: 'button', icon: 'crop_7_5', title: 'Button', signal: buttonPageOpened },
            { page: 'calendar', icon: 'event', title: 'Calendar', signal: calendarPageOpened },
            { page: 'checkbox', icon: 'check_box', title: 'Checkbox', signal: checkboxPageOpened },
            { page: 'datePicker', icon: 'event_available', title: 'Date Picker', signal: datePickerPageOpened },
            { page: 'dialog', icon: 'picture_in_picture', title: 'Dialog', signal: dialogPageOpened },
            { page: 'form', icon: 'content_paste', title: 'Form', signal: formPageOpened },
            { page: 'gridSystem', icon: 'view_compact', title: 'Grid System', signal: gridSystemPageOpened },
            { page: 'input', icon: 'edit', title: 'Input', signal: inputPageOpened },
            { page: 'menu', icon: 'more_vert', title: 'Menu', signal: menuPageOpened },
            { page: 'paper', icon: 'layers', title: 'Paper', signal: paperPageOpened },
            { page: 'select', icon: 'arrow_drop_down', title: 'Select', signal: selectPageOpened },
            { page: 'sidenav', icon: 'menu', title: 'Sidenav', signal: sidenavPageOpened },
            { page: 'spinner', icon: 'sync', title: 'Spinner', signal: spinnerPageOpened },
            { page: 'table', icon: 'reorder', title: 'Table', signal: tablePageOpened },
            { page: 'typography', icon: 'format_size', title: 'Typography', signal: typographyPageOpened }
          ].map((menu, i) => {
            return menu.separator ? (
              <Sidenav.Separator key={i} />
            ) : (
              <Sidenav.Item
                key={i}
                showIcon
                icon={<Icon name={menu.icon} />}
                selected={menu.page === currentPage}
                onClick={() => menu.signal()}>
                {menu.title}
              </Sidenav.Item>
            );
          })}
        </Sidenav>
        <Appbar fixed>
          <Appbar.Container>
            <Appbar.Button onClick={() => sidenavOpened()}>
              <Icon name="menu" />
            </Appbar.Button>
            <Appbar.Title>{title}</Appbar.Title>
          </Appbar.Container>
          <Appbar.Container>
            <Appbar.Button onClick={() => (location.href = 'https://github.com/garth/material-components')}>
              <Icon name="github" />
            </Appbar.Button>
            <Appbar.Button onClick={() => localeMenuOpened()}>
              <Icon name="globe" />
            </Appbar.Button>
            <Menu rightAlign isOpen={showLocaleMenu} onClose={() => localeMenuClosed()}>
              <Menu.Item showIcon onClick={() => localeSelected({ locale: 'de' })} selected={locale === 'de'}>
                Deutsch
              </Menu.Item>
              <Menu.Item showIcon onClick={() => localeSelected({ locale: 'en' })} selected={locale === 'en'}>
                English
              </Menu.Item>
            </Menu>
          </Appbar.Container>
        </Appbar>
        <div
          style={{
            fontSize: '16px',
            padding: '24px',
            maxWidth: '950px',
            margin: '0 auto'
          }}>
          <RouteComponent />
        </div>
      </div>
    );
  }
}

export default connect(
  {
    currentPage: state`route.page`,
    locale: state`locale`,
    showLocaleMenu: state`showLocaleMenu`,
    sidenavOpen: state`sidenavOpen`,
    title: state`route.title`,
    sidenavClosed: signal`sidenavClosed`,
    introductionPageOpened: signal`introductionPageOpened`,
    gettingStartedPageOpened: signal`gettingStartedPageOpened`,
    appbarPageOpened: signal`appbarPageOpened`,
    buttonPageOpened: signal`buttonPageOpened`,
    calendarPageOpened: signal`calendarPageOpened`,
    checkboxPageOpened: signal`checkboxPageOpened`,
    datePickerPageOpened: signal`datePickerPageOpened`,
    dialogPageOpened: signal`dialogPageOpened`,
    formPageOpened: signal`formPageOpened`,
    gridSystemPageOpened: signal`gridSystemPageOpened`,
    inputPageOpened: signal`inputPageOpened`,
    menuPageOpened: signal`menuPageOpened`,
    paperPageOpened: signal`paperPageOpened`,
    selectPageOpened: signal`selectPageOpened`,
    sidenavPageOpened: signal`sidenavPageOpened`,
    spinnerPageOpened: signal`spinnerPageOpened`,
    tablePageOpened: signal`tablePageOpened`,
    typographyPageOpened: signal`typographyPageOpened`,
    localeMenuClosed: signal`localeMenuClosed`,
    localeMenuOpened: signal`localeMenuOpened`,
    localeSelected: signal`localeSelected`,
    sidenavOpened: signal`sidenavOpened`
  },
  Application
);

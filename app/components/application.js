import React, { Component, PropTypes } from 'react';
import { Decorator as State } from 'cerebral-react';

// import the material-components
import {
  Appbar, Button, Col, Row,
  Typ, Menu, Sidenav, Calendar
} from '../../lib';

import Example from './example';
import FaIcon from './faicon';
import Icon from './icon';
import routeComponent from './routeComponent';

@State({
  screen: ['screen'],
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
    screen: PropTypes.object,
    sidenavOpen: PropTypes.bool,
    showMoreMenu: PropTypes.bool,
    currentPage: PropTypes.string,
    title: PropTypes.string
  };

  state = {
    screen: {},
    sidenavOpen: false,
    showMoreMenu: false,
    email: '',
    password: '',
    selectOpen: false,
    selectSuccessOpen: false,
    selectErrorOpen: false,
    selected: null,
    largeSelectOpen: false,
    largeSelectedValue: 0,
    checked: false,
    showDialog: false,
    showSimpleMenu: false,
    showMenu: false,
    selectedOption: 1,
    isLoading: false,
    calendar: {
      year: 2015,
      month: 10
    },
    selectedDate: new Date(2015, 10, 20),
    showDatePicker: false,
    pickedDate: null,
    pickingDate: null,
    pickedCalendar: {
      year: 2015,
      month: 10
    }
  }

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

  render() {
    const {
      currentPage,
      signals,
      sidenavOpen,
      showMoreMenu,
      title
    } = this.props;

    const RouteComponent = routeComponent(currentPage);

    return (
      <div>
        <Sidenav isOpen={sidenavOpen} onDone={() => signals.sidenavClosed()}>
          <Sidenav.Title showCloseButton>Material Components</Sidenav.Title>
          {[
            { icon: 'directions', page: 'introduction', title: 'Introduction', signal: signals.introductionPageOpened },
            { icon: 'tune', page: 'gettingStarted', title: 'Getting Started', signal: signals.gettingStartedPageOpened },
            { seperator: true },
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
            { seperator: true },
            { icon: 'devices', page: 'responsiveEvents', title: 'Responsive Events', signal: signals.responsiveEventsPageOpened }
          ].map((menu, i) => {
            return menu.seperator ? (
              <Sidenav.Seperator key={i}/>
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
              <FaIcon name="github"/>
            </Appbar.Button>
            <Appbar.Button onTouchTap={() => signals.moreMenuOpened()}>
              <Icon name="more_vert"/>
            </Appbar.Button>
            <Menu rightAlign isOpen={showMoreMenu} onDone={() => signals.moreMenuClosed()}>
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

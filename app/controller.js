import { Controller, Module } from 'cerebral';
import { set } from 'cerebral/operators';
import { state, props } from 'cerebral/tags';
import setRoute from './actions/setRoute';
import setLocale from './actions/setLocale';
import setScreen from './actions/setScreen';
import router from './router';

export default Controller(
  Module({
    state: {
      locale: 'en',
      screen: {},
      sidenavOpen: false,
      showLocaleMenu: false,

      demos: {
        input: {
          email: '',
          password: ''
        },
        select: {
          selectOpen: false,
          selectSuccessOpen: false,
          selectErrorOpen: false,
          selected: null,
          largeSelectOpen: false,
          largeSelectedValue: 0
        },
        checkbox: {
          checked: false
        },
        dialog: {
          showDialog: false
        },
        menu: {
          showSimpleMenu: false,
          showMenu: false,
          selectedOption: 1
        },
        spinner: {
          isLoading: false
        },
        calendar: {
          calendar: {
            year: 2015,
            month: 10
          },
          selectedDate: new Date(2015, 10, 20)
        },
        datePicker: {
          showDatePicker: false,
          pickedDate: null,
          pickingDate: null,
          pickedCalendar: {
            year: 2015,
            month: 10
          }
        }
      },

      // routing
      route: {
        url: '/',
        page: 'home',
        title: ''
      }
    },
    signals: {
      calendarChanged: [set(state`demos.calendar.selectedDate`, props`value`)],
      calendarNavigate: [set(state`demos.calendar.calendar`, props`value`)],

      checkboxChanged: [set(state`demos.checkbox.checked`, props`value`)],
      datePickerCanceled: [set(state`demos.datePicker.showDatePicker`, false)],
      datePickerChanged: [set(state`demos.datePicker.pickingDate`, props`value`)],
      datePickerNavigate: [set(state`demos.datePicker.pickedCalendar`, props`value`)],
      datePickerOpened: [
        set(state`demos.datePicker.pickingDate`, props`value`),
        set(state`demos.datePicker.showDatePicker`, true)
      ],
      datePickerSelected: [
        set(state`demos.datePicker.pickedDate`, props`value`),
        set(state`demos.datePicker.showDatePicker`, false)
      ],
      dialogClosed: [set(state`demos.dialog.showDialog`, false)],
      dialogOpened: [set(state`demos.dialog.showDialog`, true)],
      emailChanged: [set(state`demos.input.email`, props`value`)],
      isLoadingChanged: [set(state`demos.spinner.isLoading`, props`value`)],
      localeMenuClosed: [set(state`showLocaleMenu`, false)],
      localeMenuOpened: [set(state`showLocaleMenu`, true)],
      localeSelected: [setLocale],
      menuClosed: [set(state`demos.menu.showMenu`, false)],
      menuOpened: [set(state`demos.menu.showMenu`, true)],
      passwordChanged: [set(state`demos.input.password`, props`value`)],
      screenChanged: [setScreen],
      selectMenuOption: [set(state`demos.menu.selectedOption`, props`value`)],
      sidenavClosed: [set(state`sidenavOpen`, false)],
      sidenavOpened: [set(state`sidenavOpen`, true)],
      simpleMenuClosed: [set(state`demos.menu.showSimpleMenu`, false)],
      simpleMenuOpened: [set(state`demos.menu.showSimpleMenu`, true)],
      selectChanged: [set(state`demos.select.selected`, props`value`)],
      selectOpened: [set(state`demos.select.selectOpen`, true)],
      selectClosed: [set(state`demos.select.selectOpen`, false)],
      selectSuccessOpened: [set(state`demos.select.selectSuccessOpen`, true)],
      selectSuccessClosed: [set(state`demos.select.selectSuccessOpen`, false)],
      selectErrorOpened: [set(state`demos.select.selectErrorOpen`, true)],
      selectErrorClosed: [set(state`demos.select.selectErrorOpen`, false)],
      selectLargeChanged: [set(state`demos.select.largeSelectedValue`, props`value`)],
      selectLargeOpened: [set(state`demos.select.largeSelectOpen`, true)],
      selectLargeClosed: [set(state`demos.select.largeSelectOpen`, false)],
      introductionPageOpened: [setRoute('introduction', 'Introduction')],
      gettingStartedPageOpened: [setRoute('gettingStarted', 'Getting Started')],
      paperPageOpened: [setRoute('paper', 'Paper')],
      typographyPageOpened: [setRoute('typography', 'Typography')],
      appbarPageOpened: [setRoute('appbar', 'Appbar')],
      sidenavPageOpened: [setRoute('sidenav', 'Sidenav')],
      formPageOpened: [setRoute('form', 'Form')],
      buttonPageOpened: [setRoute('button', 'Button')],
      inputPageOpened: [setRoute('input', 'Input')],
      selectPageOpened: [setRoute('select', 'Select')],
      checkboxPageOpened: [setRoute('checkbox', 'Checkbox')],
      gridSystemPageOpened: [setRoute('gridSystem', 'Grid System')],
      menuPageOpened: [setRoute('menu', 'Menu')],
      dialogPageOpened: [setRoute('dialog', 'Dialog')],
      datePickerPageOpened: [setRoute('datePicker', 'Date Picker')],
      tablePageOpened: [setRoute('table', 'Table')],
      spinnerPageOpened: [setRoute('spinner', 'Spinner')],
      calendarPageOpened: [setRoute('calendar', 'Calendar')],
      responsiveEventsPageOpened: [setRoute('responsiveEvents', 'Responsive Events')],
      notFoundPageOpened: [setRoute('notFound', 'Page Not Found')]
    },
    modules: {
      router
    }
  }),
  {}
);

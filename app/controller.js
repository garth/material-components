import Controller from 'cerebral';
import Model from 'cerebral-baobab';
import moment from 'moment';

export default Controller(Model({

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
}), {
  moment
});

import Router from '@cerebral/router';

export default Router({
  routes: [
    { path: '/', signal: 'introductionPageOpened' },
    { path: '/gettingStarted', signal: 'gettingStartedPageOpened' },
    { path: '/paper', signal: 'paperPageOpened' },
    { path: '/typography', signal: 'typographyPageOpened' },
    { path: '/appbar', signal: 'appbarPageOpened' },
    { path: '/sidenav', signal: 'sidenavPageOpened' },
    { path: '/form', signal: 'formPageOpened' },
    { path: '/button', signal: 'buttonPageOpened' },
    { path: '/input', signal: 'inputPageOpened' },
    { path: '/select', signal: 'selectPageOpened' },
    { path: '/checkbox', signal: 'checkboxPageOpened' },
    { path: '/gridSystem', signal: 'gridSystemPageOpened' },
    { path: '/menu', signal: 'menuPageOpened' },
    { path: '/dialog', signal: 'dialogPageOpened' },
    { path: '/datePicker', signal: 'datePickerPageOpened' },
    { path: '/table', signal: 'tablePageOpened' },
    { path: '/spinner', signal: 'spinnerPageOpened' },
    { path: '/calendar', signal: 'calendarPageOpened' },
    { path: '*', signal: 'notFoundPageOpened' }
  ],
  onlyHash: true,
  urlStorePath: ['route', 'url']
});

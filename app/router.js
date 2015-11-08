import Router from 'cerebral-router';
import controller from './controller';

export default Router(controller, {
  '/': 'introductionPageOpened',
  '/gettingStarted': 'gettingStartedPageOpened',
  '/paper': 'paperPageOpened',
  '/typography': 'typographyPageOpened',
  '/appbar': 'appbarPageOpened',
  '/sidenav': 'sidenavPageOpened',
  '/form': 'formPageOpened',
  '/button': 'buttonPageOpened',
  '/input': 'inputPageOpened',
  '/select': 'selectPageOpened',
  '/checkbox': 'checkboxPageOpened',
  '/gridSystem': 'gridSystemPageOpened',
  '/menu': 'menuPageOpened',
  '/dialog': 'dialogPageOpened',
  '/datePicker': 'datePickerPageOpened',
  '/table': 'tablePageOpened',
  '/spinner': 'spinnerPageOpened',
  '/calendar': 'calendarPageOpened',
  '/responsiveEvents': 'responsiveEventsPageOpened',
  '*': 'notFoundPageOpened'
}, {
  onlyHash: true,
  urlStorePath: ['route', 'url']
});

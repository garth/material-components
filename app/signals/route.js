import controller from '../controller';
import { setRoute } from '../actions/route';

controller.signal('introductionPageOpened', [
  setRoute('introduction', 'Introduction')
]);

controller.signal('gettingStartedPageOpened', [
  setRoute('gettingStarted', 'Getting Started')
]);

controller.signal('paperPageOpened', [
  setRoute('paper', 'Paper')
]);

controller.signal('typographyPageOpened', [
  setRoute('typography', 'Typography')
]);

controller.signal('appbarPageOpened', [
  setRoute('appbar', 'Appbar')
]);

controller.signal('sidenavPageOpened', [
  setRoute('sidenav', 'Sidenav')
]);

controller.signal('formPageOpened', [
  setRoute('form', 'Form')
]);

controller.signal('buttonPageOpened', [
  setRoute('button', 'Button')
]);

controller.signal('inputPageOpened', [
  setRoute('input', 'Input')
]);

controller.signal('selectPageOpened', [
  setRoute('select', 'Select')
]);

controller.signal('checkboxPageOpened', [
  setRoute('checkbox', 'Checkbox')
]);

controller.signal('gridSystemPageOpened', [
  setRoute('gridSystem', 'Grid System')
]);

controller.signal('menuPageOpened', [
  setRoute('menu', 'Menu')
]);

controller.signal('dialogPageOpened', [
  setRoute('dialog', 'Dialog')
]);

controller.signal('datePickerPageOpened', [
  setRoute('datePicker', 'Date Picker')
]);

controller.signal('tablePageOpened', [
  setRoute('table', 'Table')
]);

controller.signal('spinnerPageOpened', [
  setRoute('spinner', 'Spinner')
]);

controller.signal('calendarPageOpened', [
  setRoute('calendar', 'Calendar')
]);

controller.signal('responsiveEventsPageOpened', [
  setRoute('responsiveEvents', 'Responsive Events')
]);

controller.signal('notFoundPageOpened', [
  setRoute('notFound', 'Page Not Found')
]);

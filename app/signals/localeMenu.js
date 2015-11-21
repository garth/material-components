import controller from '../controller';
import { set } from '../actions/basic';
import { setLocale } from '../actions/locale';

controller.signal('localeMenuOpened', [
  set('showLocaleMenu', true)
]);

controller.signal('localeMenuClosed', [
  set('showLocaleMenu', false)
]);

controller.signal('localeSelected', [
  setLocale
]);

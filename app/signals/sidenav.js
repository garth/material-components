import controller from '../controller';
import { set } from '../actions/basic';

controller.signal('sidenavOpened', [
  set('sidenavOpen', true)
]);

controller.signal('sidenavClosed', [
  set('sidenavOpen', false)
]);

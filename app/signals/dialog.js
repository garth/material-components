import controller from '../controller';
import { set } from '../actions/basic';

controller.signal('dialogOpened', [
  set(['demos', 'dialog', 'showDialog'], true)
]);

controller.signal('dialogClosed', [
  set(['demos', 'dialog', 'showDialog'], false)
]);

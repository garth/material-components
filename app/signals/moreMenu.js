import controller from '../controller';
import { set } from '../actions/basic';

controller.signal('moreMenuOpened', [
  set('showMoreMenu', true)
]);

controller.signal('moreMenuClosed', [
  set('showMoreMenu', false)
]);

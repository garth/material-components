import controller from '../controller';
import { set, setInputValue } from '../actions/basic';

controller.signal('selectChanged', [
  setInputValue(['demos', 'select', 'selected'])
]);

controller.signal('selectOpened', [
  set(['demos', 'select', 'selectOpen'], true)
]);

controller.signal('selectClosed', [
  set(['demos', 'select', 'selectOpen'], false)
]);

controller.signal('selectSuccessOpened', [
  set(['demos', 'select', 'selectSuccessOpen'], true)
]);

controller.signal('selectSuccessClosed', [
  set(['demos', 'select', 'selectSuccessOpen'], false)
]);

controller.signal('selectErrorOpened', [
  set(['demos', 'select', 'selectErrorOpen'], true)
]);

controller.signal('selectErrorClosed', [
  set(['demos', 'select', 'selectErrorOpen'], false)
]);

controller.signal('selectLargeChanged', [
  setInputValue(['demos', 'select', 'largeSelectedValue'])
]);

controller.signal('selectLargeOpened', [
  set(['demos', 'select', 'largeSelectOpen'], true)
]);

controller.signal('selectLargeClosed', [
  set(['demos', 'select', 'largeSelectOpen'], false)
]);

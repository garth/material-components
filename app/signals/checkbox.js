import controller from '../controller';
import { setInputValue } from '../actions/basic';

controller.signal('checkboxChanged', [
  setInputValue(['demos', 'checkbox', 'checked'])
]);

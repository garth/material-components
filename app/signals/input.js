import controller from '../controller';
import { setInputValue } from '../actions/basic';

controller.signal('emailChanged', [
  setInputValue(['demos', 'input', 'email'])
]);

controller.signal('passwordChanged', [
  setInputValue(['demos', 'input', 'password'])
]);

import controller from '../controller';
import { setInputValue } from '../actions/basic';

controller.signal('isLoadingChanged', [
  setInputValue(['demos', 'spinner', 'isLoading'])
]);

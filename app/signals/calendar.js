import controller from '../controller';
import { setInputValue } from '../actions/basic';

controller.signal('calendarChanged', [
  setInputValue(['demos', 'calendar', 'selectedDate'])
]);

controller.signal('calendarNavigate', [
  setInputValue(['demos', 'calendar', 'calendar'])
]);

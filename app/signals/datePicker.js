import controller from '../controller';
import { set, setInputValue } from '../actions/basic';

controller.signal('datePickerOpened', [
  setInputValue(['demos', 'datePicker', 'pickingDate']),
  set(['demos', 'datePicker', 'showDatePicker'], true)
]);

controller.signal('datePickerChanged', [
  setInputValue(['demos', 'datePicker', 'pickingDate'])
]);

controller.signal('datePickerNavigate', [
  setInputValue(['demos', 'datePicker', 'pickedCalendar'])
]);

controller.signal('datePickerSelected', [
  setInputValue(['demos', 'datePicker', 'pickedDate']),
  set(['demos', 'datePicker', 'showDatePicker'], false)
]);

controller.signal('datePickerCanceled', [
  set(['demos', 'datePicker', 'showDatePicker'], false)
]);

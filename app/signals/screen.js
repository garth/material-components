import controller from '../controller';
import { setScreen } from '../actions/screen';

controller.signal('screenChanged', [
  setScreen
]);

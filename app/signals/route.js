import controller from '../controller';
import { setRoute } from '../actions/route';

// public routes

controller.signal('homeOpened', [
  setRoute('home')
]);

controller.signal('notFoundOpened', [
  setRoute('notFound')
]);

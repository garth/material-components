import Router from 'cerebral-router';
import controller from './controller';

export default Router(controller, {
  '/': 'homeOpened',
  '*': 'notFoundOpened'
}, {
  onlyHash: true,
  urlStorePath: ['route', 'url']
});

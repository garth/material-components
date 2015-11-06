import Controller from 'cerebral';
import Model from 'cerebral-baobab';

export default Controller(Model({
  // routing
  route: {
    url: '/',
    path: '/',
    params: {},
    query: {},
    page: 'home'
  }
}));

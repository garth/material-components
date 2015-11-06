export default {

  setRoute(page) {
    return function setRoute(input, state) {
      state.set(['route', 'page'], page);
      state.set(['route', 'path'], input.path);
      state.set(['route', 'params'], input.params);
      state.set(['route', 'query'], input.query);
    };
  }

};

export default {

  setRoute(page, title) {
    return function setRoute(input, state) {
      state.set(['route', 'page'], page);
      state.set(['route', 'title'], title);
    };
  }

};

export default (page, title) => {
  return function setRoute({ state }) {
    state.set('route.page', page);
    state.set('route.title', title);
  };
};

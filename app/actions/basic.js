export default {

  set(statePath, value) {
    return function set(input, state) {
      state.set(statePath, value);
    };
  },

  setInputValue(statePath) {
    return function setInputValue(input, state) {
      state.set(statePath, input.value);
    };
  }

};

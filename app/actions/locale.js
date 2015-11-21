export default {

  setLocale(input, state, output, { moment }) {
    state.set('locale', input.locale);
  }

};

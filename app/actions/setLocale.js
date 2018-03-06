export default function setLocale({ props: { locale }, state }) {
  state.set('locale', locale);
}

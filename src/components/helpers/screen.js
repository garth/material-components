export default {
  getSize() {
    return {
      width: window.innerWidth || document.body.clientWidth || 1024,
      height: window.innerHeight || document.body.clientHeight || 768
    };
  }
}

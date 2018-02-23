import { canUseDOM } from 'exenv';

export default {
  getSize() {
    return {
      width: (canUseDOM && (window.innerWidth || document.body.clientWidth)) || 1024,
      height: (canUseDOM && (window.innerHeight || document.body.clientHeight)) || 768
    };
  }
};

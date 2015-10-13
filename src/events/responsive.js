let screenInfo;
let subscribers = {};

function resize() {
  const width = window.innerWidth || document.body.clientWidth || 1024;
  const height = window.innerHeight || document.body.clientHeight || 768;

  let type = 'xs';
  let size = 1;
  if (width >= 1200) {
    size = 4;
    type = 'lg';
  } else if (width >= 992) {
    size = 3;
    type = 'md';
  } else if (width >= 768) {
    size = 2;
    type = 'sm';
  }

  const isLandscape = width >= height;

  if (!screenInfo || type !== screenInfo.type || isLandscape !== screenInfo.isLandscape) {
    screenInfo = {
      type,
      size,
      isLandscape,
      isPortrait: !isLandscape
    };
    Object.keys(subscribers).forEach(eventHandler => {
      subscribers[eventHandler](screenInfo);
    });
  }
}

export default {
  addListener(eventHandler) {
    if (typeof eventHandler !== 'function') {
      return;
    }
    if (!screenInfo) {
      window.addEventListener('resize', resize);
      resize();
    }
    subscribers[eventHandler] = eventHandler;
    eventHandler(screenInfo);
  },

  removeListener(eventHandler) {
    delete subscribers[eventHandler];
  }
}

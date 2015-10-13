'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var screenInfo = undefined;
var subscribers = {};

function resize() {
  var width = window.innerWidth || document.body.clientWidth || 1024;
  var height = window.innerHeight || document.body.clientHeight || 768;

  var type = 'xs';
  var size = 1;
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

  var isLandscape = width >= height;

  if (!screenInfo || type !== screenInfo.type || isLandscape !== screenInfo.isLandscape) {
    screenInfo = {
      type: type,
      size: size,
      isLandscape: isLandscape,
      isPortrait: !isLandscape
    };
    Object.keys(subscribers).forEach(function (eventHandler) {
      subscribers[eventHandler](screenInfo);
    });
  }
}

exports['default'] = {
  addListener: function addListener(eventHandler) {
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

  removeListener: function removeListener(eventHandler) {
    delete subscribers[eventHandler];
  }
};
module.exports = exports['default'];
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _nodeWaves = require('node-waves');

var _nodeWaves2 = _interopRequireDefault(_nodeWaves);

_nodeWaves2['default'].init({
  // How long Waves effect duration
  // when it's clicked (in milliseconds)
  duration: 500,

  // Delay showing Waves effect on touch
  // and hide the effect if user scrolls
  // (0 to disable delay) (in milliseconds)
  delay: 200
});

exports['default'] = _nodeWaves2['default'];
module.exports = exports['default'];
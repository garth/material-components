'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = Seperator;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _divider = require('../divider');

var _divider2 = _interopRequireDefault(_divider);

function Seperator(_ref) {
  var _ref$style = _ref.style;
  var style = _ref$style === undefined ? {} : _ref$style;

  style = Object.assign({
    height: '8px',
    margin: '0 0 8px 0'
  }, style);

  return _react2['default'].createElement(_divider2['default'], { style: style });
}

module.exports = exports['default'];
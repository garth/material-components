'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = Divider;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function Divider(_ref) {
  var _ref$style = _ref.style;
  var style = _ref$style === undefined ? {} : _ref$style;

  style = Object.assign({
    border: 0,
    height: '1px',
    margin: '16px 0'
  }, style);

  return _react2['default'].createElement('hr', { className: 'paper-divider', style: style });
}

module.exports = exports['default'];
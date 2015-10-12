'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = Mask;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function Mask(_ref) {
  var _ref$style = _ref.style;
  var style = _ref$style === undefined ? {} : _ref$style;
  var _ref$dark = _ref.dark;
  var dark = _ref$dark === undefined ? true : _ref$dark;
  var _ref$onTouchTap = _ref.onTouchTap;
  var onTouchTap = _ref$onTouchTap === undefined ? null : _ref$onTouchTap;

  style = Object.assign({
    position: 'fixed',
    zIndex: 1000,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.15)'
  }, style);

  return _react2['default'].createElement('div', {
    className: (0, _classnames2['default'])('mask', { dark: dark, transition: dark }),
    style: style,
    onTouchTap: onTouchTap });
}

module.exports = exports['default'];
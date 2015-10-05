'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = AppbarTitle;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function AppbarTitle(_ref) {
  var _ref$style = _ref.style;
  var style = _ref$style === undefined ? {} : _ref$style;
  var _ref$children = _ref.children;
  var children = _ref$children === undefined ? null : _ref$children;

  return _react2['default'].createElement(
    'div',
    { style: Object.assign({
        fontSize: '31.5px',
        fontWeight: 'normal',
        height: '32px',
        lineHeight: '32px',
        whiteSpace: 'nowrap',
        paddingLeft: '8px',
        display: 'inline-block',
        float: 'left'
      }, style) },
    children
  );
}

module.exports = exports['default'];
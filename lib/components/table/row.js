'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = TableRow;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function TableRow(_ref) {
  var _ref$children = _ref.children;
  var children = _ref$children === undefined ? null : _ref$children;
  var _ref$className = _ref.className;
  var className = _ref$className === undefined ? '' : _ref$className;
  var _ref$onTouchTap = _ref.onTouchTap;
  var onTouchTap = _ref$onTouchTap === undefined ? null : _ref$onTouchTap;
  var _ref$style = _ref.style;
  var style = _ref$style === undefined ? {} : _ref$style;

  return _react2['default'].createElement(
    'tr',
    {
      className: (0, _classnames2['default'])(className, { clickable: onTouchTap }),
      style: style,
      onTouchTap: onTouchTap },
    children
  );
}

module.exports = exports['default'];
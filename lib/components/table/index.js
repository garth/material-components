'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _toolbar = require('./toolbar');

var _toolbar2 = _interopRequireDefault(_toolbar);

var _row = require('./row');

var _row2 = _interopRequireDefault(_row);

var Table = function Table(_ref) {
  var _ref$children = _ref.children;
  var children = _ref$children === undefined ? null : _ref$children;
  var _ref$className = _ref.className;
  var className = _ref$className === undefined ? '' : _ref$className;
  var _ref$style = _ref.style;
  var style = _ref$style === undefined ? {} : _ref$style;

  return _react2['default'].createElement(
    'table',
    {
      style: Object.assign({
        width: '100%'
      }, style),
      className: (0, _classnames2['default'])('m-c', className) },
    children
  );
};

Table.Toolbar = _toolbar2['default'];
Table.Row = _row2['default'];

exports['default'] = Table;
module.exports = exports['default'];
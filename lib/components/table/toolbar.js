"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TableToolbar;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function TableToolbar(_ref) {
  var _ref$children = _ref.children;
  var children = _ref$children === undefined ? null : _ref$children;
  var _ref$colSpan = _ref.colSpan;
  var colSpan = _ref$colSpan === undefined ? 1 : _ref$colSpan;
  var _ref$style = _ref.style;
  var style = _ref$style === undefined ? {} : _ref$style;

  return _react2["default"].createElement(
    "tr",
    { className: "toolbar" },
    _react2["default"].createElement(
      "th",
      {
        colSpan: colSpan,
        style: Object.assign({
          paddingLeft: 0
        }, style) },
      children
    )
  );
}

module.exports = exports["default"];
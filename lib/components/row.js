"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Row;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function Row(_ref) {
  var children = _ref.children;

  return _react2["default"].createElement(
    "div",
    { className: "row" },
    children
  );
}

module.exports = exports["default"];
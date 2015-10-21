'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = Form;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function Form(_ref) {
  var children = _ref.children;
  var _ref$className = _ref.className;
  var className = _ref$className === undefined ? '' : _ref$className;
  var _ref$onSubmit = _ref.onSubmit;
  var onSubmit = _ref$onSubmit === undefined ? null : _ref$onSubmit;
  var _ref$style = _ref.style;
  var style = _ref$style === undefined ? {} : _ref$style;

  return _react2['default'].createElement(
    'form',
    {
      style: style,
      className: className,
      onSubmit: function (e) {
        e.preventDefault();
        if (typeof onSubmit === 'function') {
          onSubmit(e);
        }
      },
      noValidate: true },
    children
  );
}

module.exports = exports['default'];
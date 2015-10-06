'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = Col;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function Col(_ref) {
  var _ref$type = _ref.type;
  var type = _ref$type === undefined ? '' : _ref$type;
  var children = _ref.children;

  return _react2['default'].createElement(
    'div',
    { className: type.split(' ').map(function (col) {
        return 'col-' + col;
      }).join(' ') },
    children
  );
}

module.exports = exports['default'];
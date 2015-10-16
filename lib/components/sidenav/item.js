'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _menuItem = require('../menu/item');

var _menuItem2 = _interopRequireDefault(_menuItem);

var Item = (function (_Component) {
  _inherits(Item, _Component);

  function Item() {
    _classCallCheck(this, Item);

    _get(Object.getPrototypeOf(Item.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Item, [{
    key: 'render',
    value: function render() {
      var _context$componentStyle = this.context.componentStyle;
      var primaryColor = _context$componentStyle.primaryColor;
      var typographyColor = _context$componentStyle.typographyColor;
      var _props = this.props;
      var children = _props.children;
      var icon = _props.icon;
      var onTouchTap = _props.onTouchTap;
      var selected = _props.selected;
      var showIcon = _props.showIcon;
      var style = _props.style;

      return _react2['default'].createElement(
        _menuItem2['default'],
        {
          icon: icon,
          onTouchTap: onTouchTap,
          selected: false,
          showIcon: showIcon,
          style: Object.assign({
            padding: '8px 40px 8px 24px',
            color: selected ? primaryColor : typographyColor
          }, style) },
        children
      );
    }
  }], [{
    key: 'displayName',
    value: 'Sidenav.Item',
    enumerable: true
  }, {
    key: 'contextTypes',
    value: {
      componentStyle: _react2['default'].PropTypes.object
    },
    enumerable: true
  }, {
    key: 'propTypes',
    value: {
      children: _react.PropTypes.node,
      icon: _react.PropTypes.node,
      onTouchTap: _react.PropTypes.func,
      selected: _react.PropTypes.bool,
      showIcon: _react.PropTypes.bool,
      style: _react.PropTypes.object
    },
    enumerable: true
  }, {
    key: 'defaultPropTypes',
    value: {
      style: {}
    },
    enumerable: true
  }]);

  return Item;
})(_react.Component);

exports['default'] = Item;
module.exports = exports['default'];
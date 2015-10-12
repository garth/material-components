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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _helpersWaves = require('../helpers/waves');

var _helpersWaves2 = _interopRequireDefault(_helpersWaves);

var Item = (function (_Component) {
  _inherits(Item, _Component);

  function Item() {
    _classCallCheck(this, Item);

    _get(Object.getPrototypeOf(Item.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Item, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _helpersWaves2['default'].attach(_reactDom2['default'].findDOMNode(this));
    }
  }, {
    key: 'onTouchTap',
    value: function onTouchTap() {
      if (typeof this.context.closeMenuHandler === 'function') {
        this.context.closeMenuHandler();
      }
      if (typeof this.props.onTouchTap === 'function') {
        this.props.onTouchTap();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this = this;

      var _props = this.props;
      var children = _props.children;
      var icon = _props.icon;
      var selected = _props.selected;
      var showIcon = _props.showIcon;
      var style = _props.style;

      var iconContainer = null;
      if (showIcon) {
        var iconElement = selected ? _react2['default'].createElement(
          'svg',
          { fill: '#000000', width: '24', height: '24', viewBox: '0 0 24 24', style: {
              position: 'relative',
              top: '4px'
            } },
          _react2['default'].createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
          _react2['default'].createElement('path', { d: 'M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z' })
        ) : icon;
        iconContainer = _react2['default'].createElement(
          'div',
          { style: {
              display: 'inline-block',
              width: '48px',
              height: '32px',
              lineHeight: '32px',
              fontSize: '20px'
            } },
          iconElement || ' '
        );
      }

      return _react2['default'].createElement(
        'div',
        {
          className: 'menu-item',
          style: Object.assign({
            padding: '0 40px 0 24px',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            display: 'block'
          }, style),
          onTouchTap: function () {
            return _this.onTouchTap();
          } },
        iconContainer,
        _react2['default'].createElement(
          'div',
          { style: {
              display: 'inline-block',
              lineHeight: '32px',
              height: '32px',
              fontSize: '16px'
            } },
          children
        )
      );
    }
  }], [{
    key: 'displayName',
    value: 'Menu.Item',
    enumerable: true
  }, {
    key: 'contextTypes',
    value: {
      closeMenuHandler: _react2['default'].PropTypes.func
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
      selected: false,
      style: {}
    },
    enumerable: true
  }]);

  return Item;
})(_react.Component);

exports['default'] = Item;
module.exports = exports['default'];
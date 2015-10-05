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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _helpersWaves = require('./helpers/waves');

var _helpersWaves2 = _interopRequireDefault(_helpersWaves);

var Button = (function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    _classCallCheck(this, Button);

    _get(Object.getPrototypeOf(Button.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Button, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _helpersWaves2['default'].attach(_reactDom2['default'].findDOMNode(this));
    }
  }, {
    key: 'render',
    value: function render() {
      var _context$componentStyle = this.context.componentStyle;
      var secondaryColor = _context$componentStyle.secondaryColor;
      var secondaryFontColor = _context$componentStyle.secondaryFontColor;
      var _props = this.props;
      var children = _props.children;
      var flat = _props.flat;
      var onTouchTap = _props.onTouchTap;
      var primary = _props.primary;
      var styleOverrides = _props.style;
      var type = _props.type;

      var style = {
        zIndex: 'inherit',
        fontSize: '16px',
        lineHeight: '36px',
        padding: '0 24px',
        margin: '8px',
        textAlign: 'center',
        minWidth: '64px',
        textTransform: 'uppercase',
        cursor: 'pointer'
      };

      if (primary) {
        if (flat) {
          style.color = secondaryColor;
        } else {
          style.color = secondaryFontColor;
          style.backgroundColor = secondaryColor;
        }
      }

      return _react2['default'].createElement(
        'button',
        {
          type: type,
          onTouchTap: onTouchTap,
          style: Object.assign(style, styleOverrides),
          className: (0, _classnames2['default'])('waves-button', {
            'waves-float': !flat,
            'waves-light': primary && !flat
          }) },
        children
      );
    }
  }], [{
    key: 'displayName',
    value: 'Button',
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
      flat: _react.PropTypes.bool,
      onTouchTap: _react.PropTypes.func,
      primary: _react.PropTypes.bool,
      style: _react.PropTypes.object,
      type: _react.PropTypes.string
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      flat: false,
      primary: false,
      style: {},
      type: 'button'
    },
    enumerable: true
  }]);

  return Button;
})(_react.Component);

exports['default'] = Button;
module.exports = exports['default'];
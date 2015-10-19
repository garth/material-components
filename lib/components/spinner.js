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

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var Spinner = (function (_Component) {
  _inherits(Spinner, _Component);

  function Spinner() {
    _classCallCheck(this, Spinner);

    _get(Object.getPrototypeOf(Spinner.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Spinner, [{
    key: 'render',
    value: function render() {
      var _context$componentStyle = this.context.componentStyle;
      var primaryColor = _context$componentStyle.primaryColor;
      var secondaryColor = _context$componentStyle.secondaryColor;
      var _props = this.props;
      var inline = _props.inline;
      var isOpen = _props.isOpen;
      var primary = _props.primary;
      var secondary = _props.secondary;
      var size = _props.size;
      var style = _props.style;

      var spinner = _react2['default'].createElement(
        'div',
        { style: Object.assign({
            position: 'relative',
            margin: '0 auto',
            width: size + 'px',
            height: size + 'px'
          }, style) },
        _react2['default'].createElement(
          'svg',
          { style: {
              animation: 'spinner-rotate 2s linear infinite',
              position: 'relative',
              zoom: size / 100,
              width: '100px',
              height: '100px'
            } },
          _react2['default'].createElement('circle', {
            style: {
              strokeDasharray: '1,400',
              strokeDashoffset: 0,
              animation: 'spinner-dash 1.5s ease-in-out infinite' + (!primary && !secondary ? ', spinner-color 6s ease-in-out infinite' : ''),
              strokeLinecap: 'round'
            },
            fill: 'none',
            stroke: primary ? primaryColor : secondary ? secondaryColor : null,
            cx: '50',
            cy: '50',
            r: '48',
            strokeWidth: '4',
            strokeMiterlimit: '10' })
        )
      );

      return inline ? spinner : _react2['default'].createElement(
        _reactAddonsCssTransitionGroup2['default'],
        {
          transitionEnterTimeout: 300,
          transitionLeaveTimeout: 300,
          transitionName: 'popup',
          style: { zIndex: 1100 } },
        isOpen ? _react2['default'].createElement(
          'div',
          { key: 'spinner' },
          _react2['default'].createElement(
            'div',
            {
              className: 'paper1 transition',
              style: {
                zIndex: 1100,
                position: 'fixed',
                top: '100px',
                left: '50%',
                marginLeft: '-' + (size / 2 + 6) + 'px',
                width: size + 12 + 'px',
                height: size + 12 + 'px',
                borderRadius: '50%',
                padding: '6px'
              } },
            spinner
          )
        ) : null
      );
    }
  }], [{
    key: 'displayName',
    value: 'Spinner',
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
      inline: _react.PropTypes.bool,
      isOpen: _react.PropTypes.bool,
      primary: _react.PropTypes.bool,
      secondary: _react.PropTypes.bool,
      size: _react.PropTypes.number,
      style: _react.PropTypes.object
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      inline: false,
      isOpen: false,
      primary: false,
      secondary: false,
      size: 30,
      style: {}
    },
    enumerable: true
  }]);

  return Spinner;
})(_react.Component);

exports['default'] = Spinner;
module.exports = exports['default'];
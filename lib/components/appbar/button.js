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

var _helpersWaves = require('../helpers/waves');

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
      _helpersWaves2['default'].attach(_reactDom2['default'].findDOMNode(this.refs.button));
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var children = _props.children;
      var lightWaves = _props.lightWaves;
      var onTouchTap = _props.onTouchTap;
      var style = _props.style;

      return _react2['default'].createElement(
        'div',
        { style: Object.assign({
            height: '48px',
            width: '48px',
            display: 'inline-block',
            margin: '-8px 0',
            backgroundColor: 'transparent'
          }, style) },
        _react2['default'].createElement(
          'a',
          {
            ref: 'button',
            onTouchTap: onTouchTap,
            style: {
              fontSize: '24px',
              height: '48px',
              width: '48px',
              lineHeight: '48px',
              display: 'inline-block',
              margin: '0',
              cursor: 'pointer'
            },
            className: (0, _classnames2['default'])('waves-circle', { 'waves-light': lightWaves }) },
          children
        )
      );
    }
  }], [{
    key: 'displayName',
    value: 'AppbarButton',
    enumerable: true
  }, {
    key: 'propTypes',
    value: {
      children: _react.PropTypes.node,
      lightWaves: _react.PropTypes.bool,
      onTouchTap: _react.PropTypes.func,
      style: _react.PropTypes.object
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      lightWaves: false,
      style: {}
    },
    enumerable: true
  }]);

  return Button;
})(_react.Component);

exports['default'] = Button;
module.exports = exports['default'];
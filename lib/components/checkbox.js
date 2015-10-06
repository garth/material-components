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

var _helpersWaves = require('./helpers/waves');

var _helpersWaves2 = _interopRequireDefault(_helpersWaves);

var Checkbox = (function (_Component) {
  _inherits(Checkbox, _Component);

  function Checkbox() {
    _classCallCheck(this, Checkbox);

    _get(Object.getPrototypeOf(Checkbox.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Checkbox, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _helpersWaves2['default'].attach(_reactDom2['default'].findDOMNode(this.refs.icon));
    }
  }, {
    key: 'render',
    value: function render() {
      var secondaryColor = this.context.componentStyle.secondaryColor;
      var _props = this.props;
      var label = _props.label;
      var onChange = _props.onChange;
      var readOnly = _props.readOnly;
      var style = _props.style;
      var value = _props.value;

      var icon = value ? _react2['default'].createElement(
        'svg',
        { fill: secondaryColor, height: '24', viewBox: '0 0 24 24', width: '24' },
        _react2['default'].createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
        _react2['default'].createElement('path', { d: 'M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' })
      ) : _react2['default'].createElement(
        'svg',
        { fill: 'rgba(0, 0, 0, 0.54)', height: '24', viewBox: '0 0 24 24', width: '24' },
        _react2['default'].createElement('path', { d: 'M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z' }),
        _react2['default'].createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
      );

      return _react2['default'].createElement(
        'label',
        { style: Object.assign({
            display: 'inline-block',
            cursor: 'pointer',
            margin: '14px 0',
            fontSize: '18px'
          }, style) },
        _react2['default'].createElement('input', {
          style: { display: 'none' },
          type: 'checkbox',
          value: 'on',
          onChange: function (e) {
            return onChange({ target: { value: e.target.checked } });
          },
          readOnly: readOnly,
          checked: !!value }),
        _react2['default'].createElement(
          'div',
          {
            ref: 'icon',
            className: 'waves-circle',
            style: {
              position: 'relative',
              top: '3px',
              display: 'inline-block',
              margin: '-14px -4px -14px -14px',
              paddingTop: '7px',
              width: '48px',
              height: '48px'
            } },
          icon
        ),
        label
      );
    }
  }], [{
    key: 'displayName',
    value: 'Checkbox',
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
      label: _react.PropTypes.string,
      onChange: _react.PropTypes.func.required,
      readOnly: _react.PropTypes.bool,
      style: _react.PropTypes.object,
      value: _react.PropTypes.bool
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      readOnly: false,
      style: {},
      value: false
    },
    enumerable: true
  }]);

  return Checkbox;
})(_react.Component);

exports['default'] = Checkbox;
module.exports = exports['default'];
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

var Input = (function (_Component) {
  _inherits(Input, _Component);

  function Input() {
    _classCallCheck(this, Input);

    _get(Object.getPrototypeOf(Input.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Input, [{
    key: 'render',
    value: function render() {
      var _this = this;

      var _context$componentStyle = this.context.componentStyle;
      var secondaryColor = _context$componentStyle.secondaryColor;
      var errorColor = _context$componentStyle.errorColor;
      var successColor = _context$componentStyle.successColor;
      var _props = this.props;
      var isError = _props.isError;
      var isSuccess = _props.isSuccess;
      var label = _props.label;
      var message = _props.message;
      var onChange = _props.onChange;
      var readOnly = _props.readOnly;
      var type = _props.type;
      var value = _props.value;

      return _react2['default'].createElement(
        'div',
        { className: 'input-group' },
        _react2['default'].createElement('input', {
          onFocus: function () {
            return _reactDom2['default'].findDOMNode(_this.refs.label).style.color = secondaryColor;
          },
          onBlur: function () {
            return _reactDom2['default'].findDOMNode(_this.refs.label).style.color = 'inherit';
          },
          type: type,
          className: (0, _classnames2['default'])('paper-divider', { used: value.length }),
          value: value,
          onChange: onChange,
          readOnly: readOnly,
          required: true }),
        _react2['default'].createElement('span', { className: (0, _classnames2['default'])('bar', { open: isError || isSuccess }), style: {
            backgroundColor: isError ? errorColor : isSuccess ? successColor : secondaryColor
          } }),
        _react2['default'].createElement(
          'label',
          null,
          _react2['default'].createElement(
            'span',
            { ref: 'label' },
            label
          )
        ),
        _react2['default'].createElement(
          'div',
          { className: 'info', style: {
              color: isError ? errorColor : 'inherit'
            } },
          message
        )
      );
    }
  }], [{
    key: 'displayName',
    value: 'Input',
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
      isError: _react.PropTypes.bool,
      isSuccess: _react.PropTypes.bool,
      label: _react.PropTypes.string,
      message: _react.PropTypes.node,
      onChange: _react.PropTypes.func,
      readOnly: _react.PropTypes.bool,
      type: _react.PropTypes.string,
      value: _react.PropTypes.string
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      isError: false,
      isSuccess: false,
      message: '',
      readOnly: false,
      type: 'text',
      value: ''
    },
    enumerable: true
  }]);

  return Input;
})(_react.Component);

exports['default'] = Input;
module.exports = exports['default'];
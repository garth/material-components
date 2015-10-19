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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _input = require('./input');

var _input2 = _interopRequireDefault(_input);

var _menu = require('./menu');

var _menu2 = _interopRequireDefault(_menu);

var Select = (function (_Component) {
  _inherits(Select, _Component);

  function Select() {
    _classCallCheck(this, Select);

    _get(Object.getPrototypeOf(Select.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Select, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var isError = _props.isError;
      var isOpen = _props.isOpen;
      var isSuccess = _props.isSuccess;
      var label = _props.label;
      var message = _props.message;
      var onChange = _props.onChange;
      var onDone = _props.onDone;
      var onOpen = _props.onOpen;
      var options = _props.options;
      var readOnly = _props.readOnly;
      var selected = _props.selected;
      var selectedValue = _props.selectedValue;
      var style = _props.style;

      var selectedIndex = 0;
      var displayValue = '';
      var menuItems = options.map(function (option, index) {
        var isSelected = selected && option.label === selected.label || selectedValue !== null && option.value === selectedValue;
        if (!selectedIndex && isSelected) {
          selectedIndex = index;
          displayValue = option.label;
        }
        return _react2['default'].createElement(
          _menu2['default'].Item,
          {
            className: (0, _classnames2['default'])({ selected: isSelected }),
            key: option.key || option.label,
            onTouchTap: function () {
              return onChange({ target: option });
            } },
          option.label
        );
      });

      var top = 10 - selectedIndex * 32;

      return _react2['default'].createElement(
        'div',
        {
          style: Object.assign({
            position: 'relative'
          }, style) },
        _react2['default'].createElement(
          _menu2['default'],
          {
            style: {
              position: 'relative',
              top: top + 'px',
              width: '100%'
            },
            isOpen: isOpen && !readOnly && !!menuItems,
            onDone: onDone },
          menuItems
        ),
        _react2['default'].createElement(
          'svg',
          {
            style: {
              position: 'absolute',
              right: '0px',
              top: '28px'
            },
            fill: '#aaa', height: '24', viewBox: '0 0 24 24', width: '24' },
          _react2['default'].createElement('path', { d: 'M7 10l5 5 5-5z' }),
          _react2['default'].createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
        ),
        _react2['default'].createElement(_input2['default'], {
          inputStyle: { cursor: 'pointer' },
          isError: isError,
          isSuccess: isSuccess,
          label: label,
          message: message,
          onClick: onOpen,
          readOnly: true,
          value: '' + displayValue })
      );
    }
  }], [{
    key: 'displayName',
    value: 'Select',
    enumerable: true
  }, {
    key: 'propTypes',
    value: {
      isError: _react.PropTypes.bool,
      isOpen: _react.PropTypes.bool,
      isSuccess: _react.PropTypes.bool,
      label: _react.PropTypes.string,
      message: _react.PropTypes.node,
      onChange: _react.PropTypes.func,
      onDone: _react.PropTypes.func,
      onOpen: _react.PropTypes.func,
      options: _react.PropTypes.array,
      readOnly: _react.PropTypes.bool,
      selected: _react.PropTypes.object,
      selectedValue: _react.PropTypes.any,
      style: _react.PropTypes.object
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      isError: false,
      isOpen: false,
      isSuccess: false,
      message: '',
      options: [],
      readOnly: false,
      selected: null,
      selectedValue: null,
      style: {}
    },
    enumerable: true
  }]);

  return Select;
})(_react.Component);

exports['default'] = Select;
module.exports = exports['default'];
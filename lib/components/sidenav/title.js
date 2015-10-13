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

var _appbarButton = require('../appbar/button');

var _appbarButton2 = _interopRequireDefault(_appbarButton);

var Title = (function (_Component) {
  _inherits(Title, _Component);

  function Title() {
    _classCallCheck(this, Title);

    _get(Object.getPrototypeOf(Title.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Title, [{
    key: 'onDone',
    value: function onDone() {
      if (typeof this.context.closeMenuHandler === 'function') {
        this.context.closeMenuHandler();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this = this;

      var typographyColor = this.context.componentStyle.typographyColor;
      var _props = this.props;
      var children = _props.children;
      var showCloseButton = _props.showCloseButton;
      var style = _props.style;

      return _react2['default'].createElement(
        'div',
        {
          className: 'paper-divider',
          style: Object.assign({
            height: '64px',
            lineHeight: '32px',
            padding: '16px 8px 0 16px',
            fontSize: '20px'
          }, style) },
        showCloseButton ? _react2['default'].createElement(
          _appbarButton2['default'],
          {
            style: { float: 'right' },
            className: 'waves-dark',
            onTouchTap: function () {
              return _this.onDone();
            } },
          _react2['default'].createElement(
            'svg',
            { style: {
                position: 'relative',
                top: '4px'
              }, fill: typographyColor, height: '24', viewBox: '0 0 24 24', width: '24' },
            _react2['default'].createElement('path', { d: 'M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z' }),
            _react2['default'].createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
          )
        ) : null,
        children
      );
    }
  }], [{
    key: 'displayName',
    value: 'Sidenav.Title',
    enumerable: true
  }, {
    key: 'contextTypes',
    value: {
      closeMenuHandler: _react2['default'].PropTypes.func,
      componentStyle: _react2['default'].PropTypes.object
    },
    enumerable: true
  }, {
    key: 'propTypes',
    value: {
      children: _react.PropTypes.node,
      showCloseButton: _react.PropTypes.bool,
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

  return Title;
})(_react.Component);

exports['default'] = Title;
module.exports = exports['default'];
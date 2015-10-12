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

var _mask = require('./mask');

var _mask2 = _interopRequireDefault(_mask);

var _divider = require('./divider');

var _divider2 = _interopRequireDefault(_divider);

var _button = require('./button');

var _button2 = _interopRequireDefault(_button);

function button(label, onTouchTap) {
  if (!label) {
    return null;
  }
  return _react2['default'].createElement(
    _button2['default'],
    {
      style: {
        margin: '8px 8px 8px 0',
        padding: '0 8px'
      },
      primary: true,
      flat: true,
      onTouchTap: onTouchTap },
    label
  );
}

var Dialog = (function (_Component) {
  _inherits(Dialog, _Component);

  function Dialog() {
    _classCallCheck(this, Dialog);

    _get(Object.getPrototypeOf(Dialog.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Dialog, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this = this;

      var resize = this.resize = function () {
        return _this.forceUpdate();
      };
      window.addEventListener('resize', resize);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.resize);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var cancelLabel = _props.cancelLabel;
      var children = _props.children;
      var height = _props.height;
      var isOpen = _props.isOpen;
      var okLabel = _props.okLabel;
      var onCancel = _props.onCancel;
      var onOk = _props.onOk;
      var style = _props.style;
      var title = _props.title;
      var width = _props.width;

      var screen = {
        width: window.innerWidth || document.body.clientWidth || 1024,
        height: window.innerHeight || document.body.clientHeight || 768
      };

      var top = screen.height / 2 - height / 2;
      top = top < 24 ? 24 : top;
      var maxWidth = width > screen.width - 80 ? screen.width - 80 : width;
      var left = (screen.width - maxWidth) / 2;
      var maxHeight = screen.height - 48;
      var maxContentHeight = maxHeight - 48;

      var footer = null;
      if (okLabel || cancelLabel) {
        footer = _react2['default'].createElement(
          'div',
          { style: {
              height: '56px',
              textAlign: 'right'
            } },
          _react2['default'].createElement(_divider2['default'], { style: { margin: 0 } }),
          button(cancelLabel, onCancel),
          button(okLabel, onOk)
        );
        maxContentHeight -= 56;
      }

      var titleElement = null;
      if (title) {
        titleElement = _react2['default'].createElement(
          'div',
          { style: {
              fontSize: '20px',
              fontWeight: 400,
              marginBottom: children ? '24px' : 0
            } },
          title
        );
        maxContentHeight -= 49;
      }

      var dialog = isOpen ? _react2['default'].createElement(
        'div',
        { key: 'dialog', style: { zIndex: 1000 } },
        _react2['default'].createElement(_mask2['default'], null),
        _react2['default'].createElement(
          'div',
          {
            className: 'paper2 transition',
            style: Object.assign({
              position: 'fixed',
              zIndex: 1001,
              top: top + 'px',
              left: left + 'px',
              width: maxWidth + 'px',
              maxHeight: maxHeight + 'px'
            }, style) },
          _react2['default'].createElement(
            'div',
            { style: { padding: '24px' } },
            titleElement,
            _react2['default'].createElement(
              'div',
              {
                style: {
                  maxHeight: maxContentHeight + 'px',
                  overflow: 'scroll',
                  margin: '0 -24px',
                  padding: '0 24px'
                } },
              children
            )
          ),
          footer
        )
      ) : null;

      return _react2['default'].createElement(
        _reactAddonsCssTransitionGroup2['default'],
        {
          transitionEnterTimeout: 300,
          transitionLeaveTimeout: 300,
          transitionName: 'dialog',
          style: { zIndex: 1000 } },
        dialog
      );
    }
  }], [{
    key: 'displayName',
    value: 'Dialog',
    enumerable: true
  }, {
    key: 'propTypes',
    value: {
      cancelLabel: _react.PropTypes.string,
      children: _react.PropTypes.node,
      height: _react.PropTypes.number,
      isOpen: _react.PropTypes.bool,
      okLabel: _react.PropTypes.string,
      onCancel: _react.PropTypes.func,
      onOk: _react.PropTypes.func,
      style: _react.PropTypes.object,
      title: _react.PropTypes.string,
      width: _react.PropTypes.number
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      height: 130,
      isOpen: false,
      style: {},
      width: 280
    },
    enumerable: true
  }]);

  return Dialog;
})(_react.Component);

exports['default'] = Dialog;
module.exports = exports['default'];
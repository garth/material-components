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

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _mask = require('../mask');

var _mask2 = _interopRequireDefault(_mask);

var _item = require('./item');

var _item2 = _interopRequireDefault(_item);

var _seperator = require('./seperator');

var _seperator2 = _interopRequireDefault(_seperator);

var _helpersScreen = require('../helpers/screen');

var _helpersScreen2 = _interopRequireDefault(_helpersScreen);

var Menu = (function (_Component) {
  _inherits(Menu, _Component);

  function Menu() {
    _classCallCheck(this, Menu);

    _get(Object.getPrototypeOf(Menu.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Menu, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var _this = this;

      return {
        closeMenuHandler: function closeMenuHandler() {
          return _this.onDone();
        }
      };
    }
  }, {
    key: 'onDone',
    value: function onDone() {
      if (typeof this.props.onDone === 'function') {
        this.props.onDone();
      }
    }
  }, {
    key: 'checkBounds',
    value: function checkBounds() {
      var menuElement = _reactDom2['default'].findDOMNode(this.refs.menu);
      if (menuElement) {
        var screenHeight = _helpersScreen2['default'].getSize().height;

        var _menuElement$getBoundingClientRect = menuElement.getBoundingClientRect();

        var _top = _menuElement$getBoundingClientRect.top;
        var bottom = _menuElement$getBoundingClientRect.bottom;

        var originalHeight = bottom - _top;
        var minHeight = 32 * 5 + 20;

        var offsetTop = _top < 16 ? Math.ceil((_top - 16) / -32) * 32 : 0;
        var offsetBottom = bottom > screenHeight - 16 ? Math.ceil((bottom - screenHeight + 16) / 32) * 32 : 0;
        var height = bottom - _top - offsetTop - offsetBottom;
        if (height < minHeight) {
          height = minHeight > originalHeight ? originalHeight : minHeight;
          if (_top + offsetTop + height + 16 > screenHeight) {
            offsetTop -= _top + offsetTop + height + 16 - screenHeight;
          }
        }
        menuElement.style.top = menuElement.offsetTop + offsetTop + 'px';
        menuElement.style.height = height + 'px';
        menuElement.scrollTop += offsetTop;
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.checkBounds();
      // close the options when resizing the window
      window.addEventListener('resize', this._resize = function () {
        if (_this2.props.isOpen) {
          _this2.onDone();
        }
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.checkBounds();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this._resize);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props;
      var children = _props.children;
      var isOpen = _props.isOpen;
      var rightAlign = _props.rightAlign;
      var style = _props.style;

      var menuStyle = {
        zIndex: 1001,
        padding: '10px 0',
        backgroundColor: '#fff',
        color: '#000',
        position: 'absolute',
        overflowY: 'auto',
        scrollbar: 'width: 4px',
        top: '-8px'
      };
      if (rightAlign) {
        menuStyle.right = '0';
      }

      var menu = isOpen ? _react2['default'].createElement(
        'div',
        {
          key: 'menu',
          style: {
            zIndex: 1000
          } },
        _react2['default'].createElement(_mask2['default'], { dark: false, onTouchTap: function () {
            return _this3.onDone();
          } }),
        _react2['default'].createElement(
          'div',
          { ref: 'menu', className: 'transition paper1', style: Object.assign(menuStyle, style) },
          children
        )
      ) : null;

      return _react2['default'].createElement(
        _reactAddonsCssTransitionGroup2['default'],
        {
          transitionEnterTimeout: 400,
          transitionLeaveTimeout: 400,
          transitionName: 'popup',
          style: {
            zIndex: 1000,
            position: 'absolute',
            width: rightAlign ? null : '100%'
          } },
        menu
      );
    }
  }], [{
    key: 'displayName',
    value: 'Menu',
    enumerable: true
  }, {
    key: 'propTypes',
    value: {
      children: _react.PropTypes.node,
      isOpen: _react.PropTypes.bool,
      onDone: _react.PropTypes.func,
      rightAlign: _react.PropTypes.bool,
      style: _react.PropTypes.object
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      isOpen: false,
      rightAlign: false,
      style: {}
    },
    enumerable: true
  }, {
    key: 'childContextTypes',
    value: {
      closeMenuHandler: _react.PropTypes.func
    },
    enumerable: true
  }]);

  return Menu;
})(_react.Component);

Menu.Item = _item2['default'];
Menu.Seperator = _seperator2['default'];

exports['default'] = Menu;
module.exports = exports['default'];
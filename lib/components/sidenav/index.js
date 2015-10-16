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

var _mask = require('../mask');

var _mask2 = _interopRequireDefault(_mask);

var _item = require('./item');

var _item2 = _interopRequireDefault(_item);

var _title = require('./title');

var _title2 = _interopRequireDefault(_title);

var _menuSeperator = require('../menu/seperator');

var _menuSeperator2 = _interopRequireDefault(_menuSeperator);

var Sidenav = (function (_Component) {
  _inherits(Sidenav, _Component);

  function Sidenav() {
    _classCallCheck(this, Sidenav);

    _get(Object.getPrototypeOf(Sidenav.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Sidenav, [{
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
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var children = _props.children;
      var isOpen = _props.isOpen;
      var mini = _props.mini;
      var style = _props.style;

      return mini ? _react2['default'].createElement(
        'div',
        {
          className: 'paper',
          style: Object.assign({
            position: 'absolute',
            top: '64px',
            left: 0,
            bottom: 0,
            width: '62px',
            marginLeft: '-2px',
            overflow: 'hidden'
          }, style) },
        children
      ) : _react2['default'].createElement(
        _reactAddonsCssTransitionGroup2['default'],
        {
          transitionEnterTimeout: 300,
          transitionLeaveTimeout: 300,
          transitionName: 'sidenav' },
        isOpen ? _react2['default'].createElement(
          'div',
          { key: 'sidenav' },
          _react2['default'].createElement(_mask2['default'], { onTouchTap: function () {
              return _this2.onDone();
            } }),
          _react2['default'].createElement(
            'div',
            {
              className: 'sidenav paper2',
              style: Object.assign({
                position: 'fixed',
                top: 0,
                bottom: 0,
                width: '280px',
                zIndex: 1001
              }, style) },
            children
          )
        ) : null
      );
    }
  }], [{
    key: 'displayName',
    value: 'Sidenav',
    enumerable: true
  }, {
    key: 'propTypes',
    value: {
      children: _react.PropTypes.node,
      isOpen: _react.PropTypes.bool,
      mini: _react.PropTypes.bool,
      onDone: _react.PropTypes.func,
      style: _react.PropTypes.object
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      isOpen: false,
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

  return Sidenav;
})(_react.Component);

Sidenav.Item = _item2['default'];
Sidenav.Seperator = _menuSeperator2['default'];
Sidenav.Title = _title2['default'];

exports['default'] = Sidenav;
module.exports = exports['default'];
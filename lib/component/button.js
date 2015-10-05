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
      var _this = this;

      var componentStyle = this.context.componentStyle;

      var classes = (0, _classnames2['default'])('waves-button', {
        'waves-float': !this.props.flat,
        'waves-light': this.props.primary && !this.props.flat
      });

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

      if (this.props.primary) {
        if (this.props.flat) {
          style.color = componentStyle.secondaryColor;
        } else {
          style.color = componentStyle.secondaryFontColor;
          style.backgroundColor = componentStyle.secondaryColor;
        }
      }

      style = Object.assign(style, this.props.style);

      return _react2['default'].createElement(
        'button',
        {
          type: this.props.type,
          onTouchTap: function (e) {
            return _this.props.onTouchTap && _this.props.onTouchTap(e);
          },
          style: style,
          className: classes },
        this.props.children
      );
    }
  }]);

  return Button;
})(_react.Component);

Button.displayName = 'Button';
Button.contextTypes = {
  componentStyle: _react2['default'].PropTypes.object
};
Button.propTypes = {
  children: _react.PropTypes.node,
  flat: _react.PropTypes.bool,
  primary: _react.PropTypes.bool,
  type: _react.PropTypes.string,
  onTouchTap: _react.PropTypes.func,
  style: _react.PropTypes.object
};
Button.defaultProps = {
  type: 'button',
  flat: false,
  primary: false,
  style: {}
};

exports['default'] = Button;
module.exports = exports['default'];
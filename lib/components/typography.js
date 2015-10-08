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

var Typ = (function (_Component) {
  _inherits(Typ, _Component);

  function Typ() {
    _classCallCheck(this, Typ);

    _get(Object.getPrototypeOf(Typ.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Typ, [{
    key: 'render',
    value: function render() {
      var _context$componentStyle = this.context.componentStyle;
      var primaryColor = _context$componentStyle.primaryColor;
      var secondaryColor = _context$componentStyle.secondaryColor;
      var typographyColor = _context$componentStyle.typographyColor;
      var _props = this.props;
      var children = _props.children;
      var display3 = _props.display3;
      var display2 = _props.display2;
      var display1 = _props.display1;
      var headline = _props.headline;
      var title = _props.title;
      var subheading = _props.subheading;
      var caption = _props.caption;
      var primary = _props.primary;
      var secondary = _props.secondary;
      var style = _props.style;

      return _react2['default'].createElement(
        'div',
        { className: (0, _classnames2['default'])({
            'text-display-3': display3,
            'text-display-2': display2,
            'text-display-1': display1,
            'text-headline': headline,
            'text-title': title,
            'text-subheading': subheading,
            'text-caption': caption
          }), style: Object.assign({
            color: primary ? primaryColor : secondary ? secondaryColor : typographyColor
          }, style) },
        children
      );
    }
  }], [{
    key: 'displayName',
    value: 'Typography',
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
      children: _react.PropTypes.node,
      display3: _react.PropTypes.bool,
      display2: _react.PropTypes.bool,
      display1: _react.PropTypes.bool,
      headline: _react.PropTypes.bool,
      title: _react.PropTypes.bool,
      subheading: _react.PropTypes.bool,
      caption: _react.PropTypes.bool,
      primary: _react.PropTypes.bool,
      secondary: _react.PropTypes.bool,
      style: _react.PropTypes.object
    },
    enumerable: true
  }]);

  return Typ;
})(_react.Component);

exports['default'] = Typ;
module.exports = exports['default'];
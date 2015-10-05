import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import Waves from './helpers/waves';

class Button extends Component {
  componentDidMount() {
    Waves.attach(ReactDOM.findDOMNode(this));
  }

  render() {
    const {
      secondaryColor,
      secondaryFontColor
    } = this.context.componentStyle;
    const {
      children,
      flat,
      onTouchTap,
      primary,
      style: styleOverrides,
      type
    } = this.props;

    let style = {
      zIndex: 'inherit',
      fontSize: '16px',
      lineHeight: '36px',
      padding: `0 24px`,
      margin: `8px`,
      textAlign: 'center',
      minWidth: '64px',
      textTransform: 'uppercase',
      cursor: 'pointer'
    };

    if (primary) {
      if (flat) {
        style.color = secondaryColor;
      } else {
        style.color = secondaryFontColor;
        style.backgroundColor = secondaryColor;
      }
    }

    return (
      <button
        type={type}
        onTouchTap={e => onTouchTap && onTouchTap(e)}
        style={Object.assign(style, styleOverrides)}
        className={classNames(
          'waves-button', {
            'waves-float': !flat,
            'waves-light': primary && !flat
          }
        )}>
        {children}
      </button>
    );
  }
}

Button.displayName = 'Button';
Button.contextTypes = {
  componentStyle: React.PropTypes.object
};
Button.propTypes = {
  children: PropTypes.node,
  flat: PropTypes.bool,
  onTouchTap: PropTypes.func,
  primary: PropTypes.bool,
  style: PropTypes.object,
  type: PropTypes.string
};
Button.defaultProps = {
  flat: false,
  primary: false,
  style: {},
  type: 'button'
};

export default Button;

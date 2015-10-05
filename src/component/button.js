import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import Waves from './helpers/waves';

class Button extends Component {
  componentDidMount() {
    Waves.attach(ReactDOM.findDOMNode(this));
  }

  render() {
    const componentStyle = this.context.componentStyle;

    let classes = classNames(
      'waves-button', {
        'waves-float': !this.props.flat,
        'waves-light': this.props.primary && !this.props.flat
      }
    );

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

    if (this.props.primary) {
      if (this.props.flat) {
        style.color = componentStyle.secondaryColor;
      } else {
        style.color = componentStyle.secondaryFontColor;
        style.backgroundColor = componentStyle.secondaryColor;
      }
    }

    style = Object.assign(style, this.props.style);

    return (
      <button
        type={this.props.type}
        onTouchTap={e => this.props.onTouchTap && this.props.onTouchTap(e)}
        style={style}
        className={classes}>
        {this.props.children}
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
  primary: PropTypes.bool,
  type: PropTypes.string,
  onTouchTap: PropTypes.func,
  style: PropTypes.object
};
Button.defaultProps = {
  type: 'button',
  flat: false,
  primary: false,
  style: {}
};

export default Button;

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import Waves from '../helpers/waves';

class Item extends Component {

  static displayName = 'Menu.Item';

  static contextTypes = {
    closeMenuHandler: React.PropTypes.func
  };

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    icon: PropTypes.node,
    onTouchTap: PropTypes.func,
    selected: PropTypes.bool,
    showIcon: PropTypes.bool,
    style: PropTypes.object
  };

  static defaultPropTypes = {
    selected: false,
    style: {}
  };

  componentDidMount() {
    Waves.attach(ReactDOM.findDOMNode(this));
  }

  onTouchTap() {
    if (typeof this.context.closeMenuHandler === 'function') {
      this.context.closeMenuHandler();
    }
    if (typeof this.props.onTouchTap === 'function') {
      this.props.onTouchTap();
    }
  }

  render() {
    const {
      children,
      className,
      icon,
      selected,
      showIcon,
      style
    } = this.props;

    let iconContainer = null;
    if (showIcon) {
      const iconElement = selected ? (
        <svg fill="#000000" width="24" height="24" viewBox="0 0 24 24" style={{
          position: 'relative',
          top: '4px'
        }}>
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
        </svg>
      ) : icon;
      iconContainer = (
        <div style={{
          display: 'inline-block',
          width: '48px',
          lineHeight: '32px',
          fontSize: '20px'
        }}>
          {iconElement || '\u00A0'}
        </div>
      );
    }

    return (
      <div
        className={classNames('menu-item', className)}
        style={Object.assign({
          padding: '0 40px 0 24px',
          lineHeight: '32px',
          cursor: 'pointer',
          whiteSpace: 'nowrap',
          display: 'block'
        }, style)}
        onTouchTap={() => this.onTouchTap()}>
        {iconContainer}
        <div style={{
          display: 'inline-block',
          fontSize: '16px'
        }}>
          {children}
        </div>
      </div>
    );
  }
}

export default Item;

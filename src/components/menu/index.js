import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Mask from '../mask';
import Item from './item';
import Seperator from './seperator';

class Menu extends Component {

  static displayName = 'Menu';

  static propTypes = {
    children: PropTypes.node,
    isOpen: PropTypes.bool,
    onDone: PropTypes.func,
    rightAlign: PropTypes.bool,
    style: PropTypes.object
  };

  static defaultProps = {
    isOpen: false,
    rightAlign: false,
    style: {}
  };

  static childContextTypes = {
    closeMenuHandler: PropTypes.func
  };

  getChildContext() {
    return {
      closeMenuHandler: () => this.onDone()
    };
  }

  onDone() {
    if (typeof this.props.onDone === 'function') {
      this.props.onDone();
    }
  }

  render() {
    const {
      children,
      isOpen,
      rightAlign,
      style
    } = this.props;

    let menuStyle = {
      zIndex: 1001,
      padding: '10px 0',
      backgroundColor: '#fff',
      color: '#000',
      position: 'absolute',
      top: '-8px'
    };
    if (rightAlign) {
      menuStyle.right = '0';
    }

    let menu = isOpen ? (
      <div
        key="menu"
        style={{
          zIndex: 1000
        }}>
        <Mask dark={false} onTouchTap={() => this.onDone()}/>
        <div className="transition paper1" style={Object.assign(menuStyle, style)}>
          {children}
        </div>
      </div>
    ) : null;

    return (
      <ReactCSSTransitionGroup
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
        transitionName="popup"
        style={{
          zIndex: 1000,
          position: 'absolute'
        }}>
        {menu}
      </ReactCSSTransitionGroup>
    );
  }
}

Menu.Item = Item;
Menu.Seperator = Seperator;

export default Menu;

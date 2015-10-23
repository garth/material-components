import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Mask from '../mask';
import Item from './item';
import Seperator from './seperator';
import screen from '../helpers/screen';

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

  checkBounds() {
    const menuElement = ReactDOM.findDOMNode(this.refs.menu);
    if (menuElement) {
      const screenHeight = screen.getSize().height;
      const { top, bottom } = menuElement.getBoundingClientRect();
      const originalHeight = bottom - top;
      const minHeight = (32 * 8) + 20;

      let offsetTop = top < 16 ? Math.ceil((top - 16) / -32) * 32 : 0;
      let offsetBottom = bottom > screenHeight - 16 ? Math.ceil((bottom - screenHeight + 16) / 32) * 32 : 0;
      let height = bottom - top - offsetTop - offsetBottom;
      if (height < minHeight) {
        height = minHeight > originalHeight ? originalHeight : minHeight;
        if (top + offsetTop + height + 16 > screenHeight) {
          offsetTop -= top + offsetTop + height + 16 - screenHeight;
        }
      }
      menuElement.style.top = `${menuElement.offsetTop + offsetTop}px`;
      menuElement.style.height = `${height}px`;
      menuElement.scrollTop += offsetTop;
    }
  }

  componentDidMount() {
    this.checkBounds();
    // close the options when resizing the window
    window.addEventListener('resize', this._resize = () => {
      if (this.props.isOpen) {
        this.onDone();
      }
    });
  }

  componentDidUpdate() {
    this.checkBounds();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize);
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
      overflowY: 'auto',
      scrollbar: 'width: 4px',
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
        <div ref="menu" className="transition paper1" style={Object.assign(menuStyle, style)}>
          {children}
        </div>
      </div>
    ) : null;

    return (
      <ReactCSSTransitionGroup
        transitionEnterTimeout={400}
        transitionLeaveTimeout={400}
        transitionName="popup"
        style={{
          zIndex: 1000,
          position: 'absolute',
          width: rightAlign ? null : '100%'
        }}>
        {menu}
      </ReactCSSTransitionGroup>
    );
  }
}

Menu.Item = Item;
Menu.Seperator = Seperator;

export default Menu;

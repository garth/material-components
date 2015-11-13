import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classNames from 'classnames';
import Mask from '../mask';
import Item from './item';
import Separator from './separator';
import screen from '../helpers/screen';

class Menu extends Component {

  static displayName = 'Menu';

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    rightAlign: PropTypes.bool,
    style: PropTypes.object
  };

  static defaultProps = {
    className: '',
    isOpen: false,
    rightAlign: false,
    style: {}
  };

  static childContextTypes = {
    closeMenuHandler: PropTypes.func
  };

  getChildContext() {
    return {
      closeMenuHandler: () => this.onClose()
    };
  }

  onClose() {
    if (typeof this.props.onClose === 'function') {
      this.props.onClose();
    }
  }

  checkBounds() {
    const menuElement = ReactDOM.findDOMNode(this.refs.menu);
    if (menuElement) {
      const screenHeight = screen.getSize().height;
      const { top, bottom } = menuElement.getBoundingClientRect();
      const originalHeight = bottom - top;
      const minHeight = (32 * 8) + 20;

      let offsetTop = top < 6 ? Math.ceil((top - 16) / -32) * 32 : 0;
      let offsetBottom = bottom > screenHeight - 6 ? Math.ceil((bottom - screenHeight + 16) / 32) * 32 : 0;
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
        this.onClose();
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
      className,
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
        <Mask dark={false} onTouchTap={() => this.onClose()}/>
        <div
          ref="menu"
          className={classNames('transition', 'paper1', className)}
          style={Object.assign(menuStyle, style)}>
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
Menu.Separator = Separator;

export default Menu;

import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Mask from '../mask';
import Item from './item';
import Title from './title';
import Seperator from '../menu/seperator';

class Sidenav extends Component {

  static displayName = 'Sidenav';

  static propTypes = {
    children: PropTypes.node,
    isOpen: PropTypes.bool,
    mini: PropTypes.bool,
    onDone: PropTypes.func,
    style: PropTypes.object
  };

  static defaultProps = {
    isOpen: false,
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
      mini,
      style
    } = this.props;

    return mini ? (
      <div
        className="paper"
        style={Object.assign({
          position: 'absolute',
          top: '64px',
          left: 0,
          bottom: 0,
          width: '60px',
          overflow: 'hidden'
        }, style)}>
        {children}
      </div>
    ) : (
      <ReactCSSTransitionGroup
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
        transitionName="sidenav">
        {isOpen ? (
          <div key="sidenav">
            <Mask onTouchTap={() => this.onDone()}/>
            <div
              className="sidenav paper2"
              style={Object.assign({
                position: 'fixed',
                top: 0,
                bottom: 0,
                width: '280px',
                zIndex: 1001
              }, style)}>
              {children}
            </div>
          </div>
        ) : null}
      </ReactCSSTransitionGroup>
    );
  }
}

Sidenav.Item = Item;
Sidenav.Seperator = Seperator;
Sidenav.Title = Title;

export default Sidenav;

import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classNames from 'classnames';
import Mask from '../mask';
import Item from './item';
import Title from './title';
import Separator from '../menu/separator';

class Sidenav extends Component {

  static displayName = 'Sidenav';

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    isOpen: PropTypes.bool,
    mini: PropTypes.bool,
    onDone: PropTypes.func,
    style: PropTypes.object
  };

  static defaultProps = {
    className: '',
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
      className,
      isOpen,
      mini,
      style
    } = this.props;

    return mini ? (
      <div
        className={classNames('paper', className)}
        style={Object.assign({
          position: 'absolute',
          top: '64px',
          left: 0,
          bottom: 0,
          width: '62px',
          marginLeft: '-2px',
          overflow: 'hidden'
        }, style)}>
        {children}
      </div>
    ) : (
      <ReactCSSTransitionGroup
        transitionEnterTimeout={400}
        transitionLeaveTimeout={400}
        transitionName="sidenav">
        {isOpen ? (
          <div key="sidenav">
            <Mask onTouchTap={() => this.onDone()}/>
            <div
              className={classNames('sidenav', 'paper2', className)}
              style={Object.assign({
                position: 'fixed',
                top: 0,
                bottom: 0,
                overflow: 'auto',
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
Sidenav.Separator = Separator;
Sidenav.Title = Title;

export default Sidenav;

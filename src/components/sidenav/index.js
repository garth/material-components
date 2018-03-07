import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
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
    onClose: PropTypes.func,
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
      closeMenuHandler: () => this.onClose()
    };
  }

  onClose() {
    if (typeof this.props.onClose === 'function') {
      this.props.onClose();
    }
  }

  render() {
    const { children, className, isOpen, mini, style } = this.props;

    return mini ? (
      <div
        className={classNames('paper', className)}
        style={Object.assign(
          {
            position: 'absolute',
            top: '64px',
            left: 0,
            bottom: 0,
            width: '62px',
            marginLeft: '-2px',
            overflow: 'hidden'
          },
          style
        )}>
        {children}
      </div>
    ) : (
      <TransitionGroup>
        {isOpen ? (
          <CSSTransition key="sidenav" classNames="sidenav" timeout={{ enter: 400, exit: 400 }}>
            <div>
              <Mask onTouchTap={() => this.onClose()} />
              <div
                className={classNames('sidenav', 'paper2', className)}
                style={Object.assign(
                  {
                    position: 'fixed',
                    top: 0,
                    bottom: 0,
                    overflow: 'auto',
                    width: '280px',
                    zIndex: 1001
                  },
                  style
                )}>
                {children}
              </div>
            </div>
          </CSSTransition>
        ) : null}
      </TransitionGroup>
    );
  }
}

Sidenav.Item = Item;
Sidenav.Separator = Separator;
Sidenav.Title = Title;

export default Sidenav;

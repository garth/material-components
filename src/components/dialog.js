import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classNames from 'classnames';
import Mask from './mask';
import Divider from './divider';
import Button from './button';
import screen from './helpers/screen';

export default class Dialog extends Component {

  static displayName = 'Dialog';

  static propTypes = {
    cancelLabel: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    height: PropTypes.number,
    hideDivider: PropTypes.bool,
    ignoreResizeEvents: PropTypes.bool,
    isOpen: PropTypes.bool,
    noPadding: PropTypes.bool,
    okLabel: PropTypes.string,
    onCancel: PropTypes.func,
    onOk: PropTypes.func,
    style: PropTypes.object,
    title: PropTypes.string,
    width: PropTypes.number
  };

  static defaultProps = {
    className: '',
    height: 130,
    hideDivider: false,
    ignoreResizeEvents: false,
    isOpen: false,
    noPadding: false,
    style: {},
    width: 280
  };

  componentDidMount() {
    if (!this.props.ignoreResizeEvents) {
      window.addEventListener('resize', this._resize = () => this.forceUpdate());
    }
  }

  componentWillUnmount() {
    if (!this.props.ignoreResizeEvents) {
      window.removeEventListener('resize', this._resize);
    }
  }

  button(label, onTouchTap) {
    if (!label) { return null; }
    return (
      <Button
        style={{
          margin: '8px 8px 8px 0',
          padding: '0 8px'
        }}
        primary={true}
        flat={true}
        onTouchTap={onTouchTap}>
        {label}
      </Button>
    );
  }

  render() {
    const {
      cancelLabel,
      children,
      className,
      height,
      hideDivider,
      isOpen,
      noPadding,
      okLabel,
      onCancel,
      onOk,
      style,
      title,
      width
    } = this.props;

    const screenSize = screen.getSize();

    let top = (screenSize.height / 2) - (height / 2);
    top = top < 24 ? 24 : top;
    let maxWidth = width > screenSize.width - 80 ? screenSize.width - 80 : width;
    let left = (screenSize.width - maxWidth) / 2;
    let maxHeight = screenSize.height - 48;
    let maxContentHeight = maxHeight - 48;

    let footer = null;
    if (okLabel || cancelLabel) {
      footer = (
        <div style={{
          height: '56px',
          textAlign: 'right'
        }}>
          {hideDivider ? null : (
            <Divider style={{ margin: 0 }}/>
          )}
          {this.button(cancelLabel, onCancel)}
          {this.button(okLabel, onOk)}
        </div>
      );
      maxContentHeight -= 56;
    }

    let titleElement = null;
    if (title) {
      titleElement = (
        <div style={{
          fontSize: '20px',
          fontWeight: 400,
          marginBottom: children ? '24px' : 0
        }}>{title}</div>
      );
      maxContentHeight -= 49;
    }

    let dialog = isOpen ? (
      <div key="dialog" style={{ zIndex: 1000 }}>
        <Mask/>
        <div
          className={classNames('paper2', 'transition', className)}
          style={Object.assign({
            position: 'fixed',
            zIndex: 1001,
            top: `${top}px`,
            left: `${left}px`,
            width: `${maxWidth}px`,
            maxHeight: `${maxHeight}px`
          }, style)}>
          <div style={{ padding: noPadding ? 0 : '24px' }}>
            {titleElement}
            <div
              style={{
                maxHeight: `${maxContentHeight}px`,
                overflow: 'auto',
                margin: '0 -24px',
                padding: '0 24px'
              }}>
              {children}
            </div>
          </div>
          {footer}
        </div>
      </div>
    ) : null;

    return (
      <ReactCSSTransitionGroup
        transitionEnterTimeout={400}
        transitionLeaveTimeout={400}
        transitionName="popup"
        style={{ zIndex: 1000 }}>
        {dialog}
      </ReactCSSTransitionGroup>
    );

  }
}

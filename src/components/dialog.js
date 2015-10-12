import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Mask from './mask';
import Divider from './divider';
import Button from './button';

function button(label, onTouchTap) {
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

export default class Dialog extends Component {

  static displayName = 'Dialog';

  static propTypes = {
    cancelLabel: PropTypes.string,
    children: PropTypes.node,
    height: PropTypes.number,
    isOpen: PropTypes.bool,
    okLabel: PropTypes.string,
    onCancel: PropTypes.func,
    onOk: PropTypes.func,
    style: PropTypes.object,
    title: PropTypes.string,
    width: PropTypes.number
  };

  static defaultProps = {
    height: 130,
    isOpen: false,
    style: {},
    width: 280
  };

  componentDidMount() {
    let resize = this.resize = () => this.forceUpdate();
    window.addEventListener('resize', resize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  render() {
    const {
      cancelLabel,
      children,
      height,
      isOpen,
      okLabel,
      onCancel,
      onOk,
      style,
      title,
      width
    } = this.props;

    const screen = {
      width: window.innerWidth || document.body.clientWidth || 1024,
      height: window.innerHeight || document.body.clientHeight || 768
    };

    let top = (screen.height / 2) - (height / 2);
    top = top < 24 ? 24 : top;
    let maxWidth = width > screen.width - 80 ? screen.width - 80 : width;
    let left = (screen.width - maxWidth) / 2;
    let maxHeight = screen.height - 48;
    let maxContentHeight = maxHeight - 48;

    let footer = null;
    if (okLabel || cancelLabel) {
      footer = (
        <div style={{
          height: '56px',
          textAlign: 'right'
        }}>
          <Divider style={{ margin: 0 }}/>
          {button(cancelLabel, onCancel)}
          {button(okLabel, onOk)}
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
          className="paper2 transition"
          style={Object.assign({
            position: 'fixed',
            zIndex: 1001,
            top: `${top}px`,
            left: `${left}px`,
            width: `${maxWidth}px`,
            maxHeight: `${maxHeight}px`
          }, style)}>
          <div style={{ padding: '24px' }}>
            {titleElement}
            <div
              style={{
                maxHeight: `${maxContentHeight}px`,
                overflow: 'scroll',
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
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
        transitionName="dialog"
        style={{ zIndex: 1000 }}>
        {dialog}
      </ReactCSSTransitionGroup>
    );

  }
}

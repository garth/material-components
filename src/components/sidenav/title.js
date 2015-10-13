import React, { Component, PropTypes } from 'react';
import Button from '../appbar/button';

class Title extends Component {

  static displayName = 'Sidenav.Title';

  static contextTypes = {
    closeMenuHandler: React.PropTypes.func,
    componentStyle: React.PropTypes.object
  };

  static propTypes = {
    children: PropTypes.node,
    showCloseButton: PropTypes.bool,
    style: PropTypes.object
  };

  static defaultPropTypes = {
    style: {}
  };

  onDone() {
    if (typeof this.context.closeMenuHandler === 'function') {
      this.context.closeMenuHandler();
    }
  }

  render() {
    const {
      typographyColor
    } = this.context.componentStyle;
    const {
      children,
      showCloseButton,
      style
    } = this.props;

    return (
      <div
        className="paper-divider"
        style={Object.assign({
          height: '64px',
          lineHeight: '32px',
          padding: '16px 8px 0 16px',
          fontSize: '20px'
        }, style)}>
        {showCloseButton ? (
          <Button
            style={{ float: 'right' }}
            className="waves-dark"
            onTouchTap={() => this.onDone()}>
            <svg style={{
              position: 'relative',
              top: '4px'
            }} fill={typographyColor} height="24" viewBox="0 0 24 24" width="24">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
              <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
          </Button>
        ) : null}
        {children}
      </div>
    );
  }
}

export default Title;

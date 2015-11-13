import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Button from './button';
import Title from './title';

class Appbar extends Component {

  static displayName = 'Appbar';

  static contextTypes = {
    componentStyle: React.PropTypes.object
  };

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    fixed: PropTypes.bool,
    style: PropTypes.object
  };

  static defaultProps = {
    className: '',
    style: {}
  };

  render() {
    const {
      primaryColor,
      primaryFontColor
    } = this.context.componentStyle;
    const {
      children,
      className,
      fixed,
      style
    } = this.props;

    return (
      <div style={{ height: '64px' }}>
        <div
          className={classNames('paper1', className)}
          style={Object.assign({
            position: fixed ? 'fixed' : 'inherit',
            width: '100%',
            zIndex: '1',
            height: '64px',
            lineHeight: '32px',
            padding: '16px 8px',
            backgroundColor: primaryColor,
            color: primaryFontColor
          }, style)}>
          {children}
        </div>
      </div>
    );
  }
}

Appbar.Button = Button;
Appbar.Title = Title;

export default Appbar;

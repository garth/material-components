import React, { Component, PropTypes } from 'react';
import Button from './button';
import Title from './title';

class Appbar extends Component {

  static displayName = 'Appbar';

  static contextTypes = {
    componentStyle: React.PropTypes.object
  };

  static propTypes = {
    children: PropTypes.node,
    fixed: PropTypes.bool,
    style: PropTypes.object
  };

  render() {
    const {
      primaryColor,
      primaryFontColor
    } = this.context.componentStyle;
    const {
      children,
      fixed,
      style
    } = this.props;

    return (
      <div className="paper1" style={Object.assign({
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
    );
  }
}

Appbar.Button = Button;
Appbar.Title = Title;

export default Appbar;

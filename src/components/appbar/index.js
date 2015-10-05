import React, { Component, PropTypes } from 'react';
import Heading from './heading';

class Appbar extends Component {

  static displayName = 'Appbar';

  static contextTypes = {
    componentStyle: React.PropTypes.object
  };

  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object
  };

  render() {
    const {
      primaryColor,
      primaryFontColor
    } = this.context.componentStyle;
    const {
      children,
      style
    } = this.props;

    return (
      <div className="paper1" style={Object.assign({
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

Appbar.Heading = Heading;

export default Appbar;

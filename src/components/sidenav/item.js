import React, { Component, PropTypes } from 'react';
import MenuItem from '../menu/item';

class Item extends Component {

  static displayName = 'Sidenav.Item';

  static propTypes = {
    children: PropTypes.node,
    icon: PropTypes.node,
    onTouchTap: PropTypes.func,
    selected: PropTypes.bool,
    showIcon: PropTypes.bool,
    style: PropTypes.object
  };

  static defaultPropTypes = {
    style: {}
  };

  render() {
    const {
      children,
      style
    } = this.props;

    return (
      <MenuItem
        style={Object.assign({
          padding: '8px 40px 8px 24px'
        }, style)}
        {...this.props}>
        {children}
      </MenuItem>
    );
  }
}

export default Item;

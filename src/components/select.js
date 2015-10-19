import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Input from './input';
import Menu from './menu';

class Select extends Component {

  static displayName = 'Select';

  static propTypes = {
    isError: PropTypes.bool,
    isOpen: PropTypes.bool,
    isSuccess: PropTypes.bool,
    label: PropTypes.string,
    message: PropTypes.node,
    onChange: PropTypes.func,
    onDone: PropTypes.func,
    onOpen: PropTypes.func,
    options: PropTypes.array,
    readOnly: PropTypes.bool,
    selected: PropTypes.object
  };

  static defaultProps = {
    isError: false,
    isOpen: false,
    isSuccess: false,
    message: '',
    options: [],
    readOnly: false,
    selected: null
  };

  render() {
    const {
      isError,
      isOpen,
      isSuccess,
      label,
      message,
      onChange,
      onDone,
      onOpen,
      options,
      readOnly,
      selected
    } = this.props;

    let selectedIndex = 0;
    let menuItems = isOpen && !readOnly ? options.map((option, index) => {
      let isSelected = selected && option.label === selected.label;
      if (!selectedIndex && isSelected) {
        selectedIndex = index;
      }
      return (
        <Menu.Item
          className={classNames({ selected: isSelected })}
          key={option.key || option.label}
          onTouchTap={() => onChange({ target: option })}>
          {option.label}
        </Menu.Item>
      );
    }) : null;

    const top = 10 - (selectedIndex * 32)

    return (
      <div>
        <Menu
          style={{
            position: 'relative',
            top: `${top}px`,
            width: '100%'
          }}
          isOpen={!!menuItems}
          onDone={onDone}>
          {menuItems}
        </Menu>
        <Input
          inputStyle={{ cursor: 'pointer' }}
          isError={isError}
          isSuccess={isSuccess}
          label={label}
          message={message}
          onClick={onOpen}
          readOnly
          value={selected && selected.label || ''}/>
      </div>
    );
  }
}

export default Select;

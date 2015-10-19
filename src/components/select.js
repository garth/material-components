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
    selected: PropTypes.object,
    selectedValue: PropTypes.any,
    style: PropTypes.object
  };

  static defaultProps = {
    isError: false,
    isOpen: false,
    isSuccess: false,
    message: '',
    options: [],
    readOnly: false,
    selected: null,
    selectedValue: null,
    style: {}
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
      selected,
      selectedValue,
      style
    } = this.props;

    let selectedIndex = 0;
    let displayValue = '';
    let menuItems = options.map((option, index) => {
      let isSelected = (selected && option.label === selected.label)
       || (selectedValue !== null && option.value === selectedValue);
      if (!selectedIndex && isSelected) {
        selectedIndex = index;
        displayValue = option.label;
      }
      return (
        <Menu.Item
          className={classNames({ selected: isSelected })}
          key={option.key || option.label}
          onTouchTap={() => onChange({ target: option })}>
          {option.label}
        </Menu.Item>
      );
    });

    const top = 10 - (selectedIndex * 32);

    return (
      <div
        style={Object.assign({
          position: 'relative'
        }, style)}>
        <Menu
          style={{
            position: 'relative',
            top: `${top}px`,
            width: '100%'
          }}
          isOpen={isOpen && !readOnly && !!menuItems}
          onDone={onDone}>
          {menuItems}
        </Menu>
        <svg
          style={{
            position: 'absolute',
            right: '0px',
            top: '28px'
          }}
          fill="#aaa" height="24" viewBox="0 0 24 24" width="24">
          <path d="M7 10l5 5 5-5z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
        <Input
          inputStyle={{ cursor: 'pointer' }}
          isError={isError}
          isSuccess={isSuccess}
          label={label}
          message={message}
          onClick={onOpen}
          readOnly
          value={`${displayValue}`}/>
      </div>
    );
  }
}

export default Select;

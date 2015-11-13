import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Input from './input';
import Menu from './menu';

class Select extends Component {

  static displayName = 'Select';

  static propTypes = {
    className: PropTypes.string,
    isError: PropTypes.bool,
    isOpen: PropTypes.bool,
    isSuccess: PropTypes.bool,
    label: PropTypes.string,
    message: PropTypes.node,
    onChange: PropTypes.func,
    onClose: PropTypes.func,
    onOpen: PropTypes.func,
    options: PropTypes.array,
    readOnly: PropTypes.bool,
    selected: PropTypes.object,
    style: PropTypes.object,
    value: PropTypes.any
  };

  static defaultProps = {
    className: '',
    isError: false,
    isOpen: false,
    isSuccess: false,
    label: '',
    message: '',
    options: [],
    readOnly: false,
    selected: null,
    style: {},
    value: null
  };

  render() {
    const {
      className,
      isError,
      isOpen,
      isSuccess,
      label,
      message,
      onChange,
      onClose,
      onOpen,
      options,
      readOnly,
      selected,
      style,
      value
    } = this.props;

    let selectedIndex = 0;
    let displayValue = '';
    let menuItems = options.map((option, index) => {
      let isSelected = (selected && option.label === selected.label)
       || (value !== null && option.value === value);
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
        className={className}
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
          onClose={onClose}>
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

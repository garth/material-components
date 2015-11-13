import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

class Input extends Component {

  static displayName = 'Input';

  static contextTypes = {
    componentStyle: React.PropTypes.object
  };

  static propTypes = {
    className: PropTypes.string,
    inputStyle: PropTypes.object,
    isError: PropTypes.bool,
    isSuccess: PropTypes.bool,
    label: PropTypes.string,
    message: PropTypes.node,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    readOnly: PropTypes.bool,
    style: PropTypes.object,
    type: PropTypes.string,
    value: PropTypes.string
  };

  static defaultProps = {
    className: '',
    inputStyle: {},
    isError: false,
    isSuccess: false,
    message: '',
    readOnly: false,
    style: {},
    type: 'text',
    value: ''
  };

  render() {
    const {
      secondaryColor,
      errorColor,
      successColor
    } = this.context.componentStyle;
    const {
      className,
      inputStyle,
      isError,
      isSuccess,
      label,
      message,
      onChange,
      onClick,
      onFocus,
      readOnly,
      style,
      type,
      value
    } = this.props;

    return (
      <div
        className={classNames('input-group', className)}
        style={style}>
        <input
          onClick={onClick}
          onFocus={e => {
            ReactDOM.findDOMNode(this.refs.label).style.color = secondaryColor;
            if (typeof onFocus === 'function') {
              onFocus(e);
            }
          }}
          onBlur={() => ReactDOM.findDOMNode(this.refs.label).style.color = 'inherit'}
          type={type}
          className={classNames('paper-divider', { used: value && value.length })}
          style={inputStyle}
          value={value}
          onChange={onChange}
          readOnly={readOnly}
          required/>
        <span
          className={classNames('bar', { open: isError || isSuccess })}
          style={{
            backgroundColor: isError ? errorColor : isSuccess ? successColor : secondaryColor
          }}/>
        <label>
          <span ref="label">
            {label}
          </span>
        </label>
        <div
          className="info"
          style={{
            color: isError ? errorColor : 'inherit'
          }}>
          {message}
        </div>
      </div>
    );
  }
}

export default Input;

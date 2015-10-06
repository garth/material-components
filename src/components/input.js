import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

class Input extends Component {

  static displayName = 'Input';

  static contextTypes = {
    componentStyle: React.PropTypes.object
  };

  static propTypes = {
    isError: PropTypes.bool,
    isSuccess: PropTypes.bool,
    label: PropTypes.string,
    message: PropTypes.node,
    onChange: PropTypes.func,
    readOnly: PropTypes.bool,
    type: PropTypes.string,
    value: PropTypes.string
  };

  static defaultProps = {
    isError: false,
    isSuccess: false,
    message: '',
    readOnly: false,
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
      isError,
      isSuccess,
      label,
      message,
      onChange,
      readOnly,
      type,
      value
    } = this.props;

    return (
      <div className="input-group">
        <input
          onFocus={() => ReactDOM.findDOMNode(this.refs.label).style.color = secondaryColor}
          onBlur={() => ReactDOM.findDOMNode(this.refs.label).style.color = 'inherit'}
          type={type}
          className={classNames('paper-divider', { used: value.length })}
          value={value}
          onChange={onChange}
          readOnly={readOnly}
          required/>
        <span className={classNames('bar', { open: isError || isSuccess })} style={{
          backgroundColor: isError ? errorColor : isSuccess ? successColor : secondaryColor
        }}/>
        <label ref="label">{label}</label>
        <div className="info" style={{
          color: isError ? errorColor : 'inherit'
        }}>{message}</div>
      </div>
    );
  }
}

export default Input;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import Waves from '../helpers/waves';

class Button extends Component {
  static displayName = 'AppbarButton';

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    lightWaves: PropTypes.bool,
    onClick: PropTypes.func,
    style: PropTypes.object
  };

  static defaultProps = {
    className: '',
    lightWaves: false,
    style: {}
  };

  componentDidMount() {
    Waves.attach(ReactDOM.findDOMNode(this.refs.button));
  }

  render() {
    const { children, className, lightWaves, onClick, style } = this.props;

    return (
      <div
        className={className}
        style={Object.assign(
          {
            height: '48px',
            width: '48px',
            display: 'inline-block',
            margin: '-8px 0',
            backgroundColor: 'transparent'
          },
          style
        )}>
        <a
          ref="button"
          onClick={onClick}
          style={{
            fontSize: '24px',
            height: '48px',
            width: '48px',
            lineHeight: '48px',
            display: 'inline-block',
            margin: '0',
            cursor: 'pointer'
          }}
          className={classNames('waves-circle', { 'waves-light': lightWaves })}>
          {children}
        </a>
      </div>
    );
  }
}

export default Button;

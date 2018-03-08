import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import Waves from '../helpers/waves';
import styled from 'styled-components';

const StyledButton = styled.div`
  height: 48px;
  width: 48px;
  margin: -8px 0;
  background-color: transparent;
`;

const A = styled.a`
  font-size: 24px;
  height: 48px !important;
  width: 48px !important;
  line-height: 48px !important;
  display: block;
  cursor: pointer;
`;

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
      <StyledButton className={className} style={style}>
        <A ref="button" onClick={onClick} className={classNames('waves-circle', { 'waves-light': lightWaves })}>
          {children}
        </A>
      </StyledButton>
    );
  }
}

export default Button;

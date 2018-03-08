import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from './button';
import Title from './title';
import styled from 'styled-components';

const Container = styled.div`
  height: 64px;
`;

const Bar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: ${props => (props.fixed ? 'fixed' : 'inherit')};
  width: 100%;
  z-index: 1;
  height: 64px;
  line-height: 32px;
  padding: 16px 8px;
  background-color: ${props => props.primaryColor} !important;
  color: ${props => props.primaryFontColor};
`;

class Appbar extends Component {
  static displayName = 'Appbar';

  static contextTypes = {
    componentStyle: PropTypes.object
  };

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    fixed: PropTypes.bool,
    style: PropTypes.object
  };

  static defaultProps = {
    className: '',
    style: {}
  };

  render() {
    const { primaryColor, primaryFontColor } = this.context.componentStyle;
    const { children, className, fixed, style } = this.props;

    return (
      <Container>
        <Bar className={classNames('paper1', className)} {...{ style, primaryColor, primaryFontColor, fixed }}>
          {children}
        </Bar>
      </Container>
    );
  }
}

Appbar.Button = Button;
Appbar.Title = Title;
Appbar.Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export default Appbar;

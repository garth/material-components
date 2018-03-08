import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  font-size: 31.5px;
  font-weight: normal;
  height: 32px;
  line-height: 32px;
  white-space: nowrap;
  padding-left: 8px;
`;

const AppbarTitle = ({ children = null, className = '', style = {} }) => (
  <Title className={className} style={style}>
    {children}
  </Title>
);

export default AppbarTitle;

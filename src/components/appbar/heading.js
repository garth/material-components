import React from 'react';

export default function AppbarHeading({
  style={},
  children=null
}) {

  return (
    <div style={Object.assign({
      fontSize: '31.5px',
      fontWeight: 'normal',
      height: '32px',
      lineHeight: '32px',
      whiteSpace: 'nowrap',
      paddingLeft: '8px',
      display: 'inline-block',
      float: 'left'
    }, style)}>
      {children}
    </div>
  );

}

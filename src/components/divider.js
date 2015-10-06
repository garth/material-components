import React from 'react';

export default function Divider({
  style={}
}) {

  style = Object.assign({
    border: 0,
    height: '1px',
    margin: '16px 0'
  }, style);

  return (
    <hr className="paper-divider" style={style}/>
  );
}

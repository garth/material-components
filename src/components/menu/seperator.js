import React from 'react';
import Divider from '../divider';

export default function Seperator({
  style={}
}) {

  style = Object.assign({
    height: '8px',
    margin: '0 0 8px 0'
  }, style);

  return (
    <Divider style={style}/>
  );
}

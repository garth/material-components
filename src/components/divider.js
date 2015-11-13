import React from 'react';
import classNames from 'classnames';

export default function Divider({
  className = '',
  style = {}
}) {

  return (
    <hr
      className={classNames('paper-divider', className)}
      style={Object.assign({
        border: 0,
        height: '1px',
        margin: '16px 0'
      }, style)}/>
  );
}

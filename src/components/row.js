import React from 'react';
import classNames from 'classnames';

export default function Row({
  children,
  className = '',
  style = {}
}) {

  return (
    <div
      className={classNames('row', className)}
      style={style}>
      {children}
    </div>
  );

}

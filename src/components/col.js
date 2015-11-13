import React from 'react';
import classNames from 'classnames';

export default function Col({
  children,
  className = '',
  style = {},
  type = ''
}) {

  return (
    <div
      className={classNames(className, ...type.split(' ').map(col => `col-${col}`))}
      style={style}>
      {children}
    </div>
  );

}

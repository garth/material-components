import React from 'react';
import classNames from 'classnames';

export default function TableRow({
  children = null,
  className = '',
  onTouchTap = null,
  style = {}
}) {
  return (
    <tr
      className={classNames(className, { clickable: onTouchTap })}
      style={style}
      onTouchTap={onTouchTap}>
      {children}
    </tr>
  );
}

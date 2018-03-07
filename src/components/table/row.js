import React from 'react';
import classNames from 'classnames';

export default function TableRow({ children = null, className = '', onClick = null, style = {} }) {
  return (
    <tr className={classNames(className, { clickable: onClick })} style={style} onClick={onClick}>
      {children}
    </tr>
  );
}

import React from 'react';
import classNames from 'classnames';

export default function TableToolbar({
  children = null,
  className = '',
  colSpan = 1,
  style = {}
}) {

  return (
    <tr className={classNames('toolbar', classNames)}>
      <th
        colSpan={colSpan}
        style={Object.assign({
          paddingLeft: 0
        }, style)}>
        {children}
      </th>
    </tr>
  );

}

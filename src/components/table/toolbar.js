import React from 'react';

export default function TableToolbar({
  children = null,
  colSpan = 1,
  style = {}
}) {

  return (
    <tr className="toolbar">
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

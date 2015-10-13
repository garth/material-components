import React from 'react';
import classNames from 'classnames';
import Toolbar from './toolbar';
import Row from './row';

let Table = function Table({
  children = null,
  className = '',
  style = {}
}) {

  return (
    <table
      style={Object.assign({
        width: '100%'
      }, style)}
      className={classNames('m-c', className)}>
      {children}
    </table>
  );

};

Table.Toolbar = Toolbar;
Table.Row = Row;

export default Table;

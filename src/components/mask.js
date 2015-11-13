import React from 'react';
import classNames from 'classnames';

export default function Mask({
  className = '',
  dark = true,
  onTouchTap = null,
  style = {}
}) {

  return (
    <div
      className={classNames('mask', { dark, transition: dark }, className)}
      style={Object.assign({
        position: 'fixed',
        zIndex: 1000,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.15)'
      }, style)}
      onTouchTap={onTouchTap}/>
  );

}

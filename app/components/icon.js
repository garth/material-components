import React from 'react';

export default function Icon({name, style={}}) {
  return (
    <i
      style={Object.assign({
        lineHeight: 'inherit'
      }, style)}
      className={`icon-${name}`}/>
  );
}

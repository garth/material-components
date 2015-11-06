import React from 'react';

export default function Icon({name}) {
  return (
    <i
      className="material-icons md-36"
      style={{
        lineHeight: 'inherit'
      }}>
      {name}
    </i>
  );
}

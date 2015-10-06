import React from 'react';

export default function Col({
  type = '',
  children
}) {

  return (
    <div className={type.split(' ').map(col => `col-${col}`).join(' ')}>
      {children}
    </div>
  );

}

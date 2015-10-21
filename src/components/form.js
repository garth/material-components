import React from 'react';

export default function Form({
  children,
  className = '',
  onSubmit = null,
  style = {}
}) {

  return (
    <form
      style={style}
      className={className}
      onSubmit={e => {
        e.preventDefault();
        if (typeof onSubmit === 'function') {
          onSubmit(e);
        }
      }}
      noValidate>
      {children}
    </form>
  );

}

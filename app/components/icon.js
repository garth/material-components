import React from 'react';

export default ({ name, style = {} }) => (
  <i
    style={Object.assign(
      {
        lineHeight: 'inherit'
      },
      style
    )}
    className={`icon-${name}`}
  />
);

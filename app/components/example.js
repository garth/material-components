import React from 'react';

export default function Example({ code }) {
  return (
    <div
      style={{
        padding: '8px 0'
      }}>
      <pre
        className="prettyprint lang-js linenums"
        style={{
          fontFamily: 'Ubuntu Mono',
          padding: '8px 0',
          margin: '0',
          borderRadius: '0',
          width: '100%'
        }}>
        {code.trim()}
      </pre>
    </div>
  )
}

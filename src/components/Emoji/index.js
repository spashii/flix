import React from 'react';
const Emoji = ({ symbol, label, className }) => (
  <span
    className={className}
    role='img'
    aria-label={label ? label : ''}
    aria-hidden={label ? 'false' : 'true'}
  >
    {symbol}
  </span>
);
export default Emoji;

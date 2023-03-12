import React from 'react';

function Counter({ stages, current }) {
  return (
    <div className="text-middle">
      <span>{current}</span>
      <p>/</p>
      <span>{stages.length}</span>
    </div>
  );
}

export default Counter;

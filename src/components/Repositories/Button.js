import React from 'react';

export default function ({ onClick, className, label }) {
  return (
    <button
      onClick={onClick}
      className={className}
    >
      {label}
    </button>
  )
}
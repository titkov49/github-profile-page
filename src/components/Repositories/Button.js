import React from 'react';

export default function ({ onClick, className, label }) {
  return (
    <a href="#repositories">
      <button
        onClick={onClick}
        className={className}
      >
        {label}
      </button>
    </a>
  )
}
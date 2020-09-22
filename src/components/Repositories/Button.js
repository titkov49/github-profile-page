import React from 'react';

export default function ({ onClick, className, label }) {
  return (
    <button
      onClick={onClick}
      className={className}
    >
      <a href="#repositories">{label}</a>
    </button>
  )
}
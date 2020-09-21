import React, { useState, useRef, useEffect } from 'react';

export default function ({ setValue, autoloading }) {
  const [str, setString] = useState('');
  const timeoutRef = useRef();

  useEffect(() => {
    if (!autoloading) return;
    clearTimeout(timeoutRef);
    timeoutRef.current = setTimeout(() => setValue(str), 300);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [str])

  const onEnterPress = (e) => {
    if (e.key === 'Enter' && !autoloading) {
      setValue(str);
      setString('');
    }
  }

  return (
    <div>
      <input
        type="text"
        value={str}
        onChange={e => setString(e.target.value)}
        onKeyPress={e => onEnterPress(e)}
      />
    </div>
  )
}
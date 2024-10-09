import React, { useRef } from 'react';

const RefExample = () => {
  const inputRef = useRef(null);
  

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus(); // Focuses the input element
    
    }
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type something..." />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default RefExample;

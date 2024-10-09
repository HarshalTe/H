// src/ChildComponent.js
import React, { useContext } from 'react';
import { MyContext } from './ContextProvider';

const ChildComponent = () => {
  const context = useContext(MyContext);

  return (
    <div>
      <h1>Name: {context.name}</h1>
      <h2>Age: {context.age}</h2>
    </div>
  );
};

export default ChildComponent;

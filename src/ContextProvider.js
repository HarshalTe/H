// src/ContextProvider.js
import React, { createContext } from 'react';

export const MyContext = createContext();

export const ContextProvider = ({ children }) => {
  const value = { name: 'John', age: 30 };

  return (
    <MyContext.Provider value={value}>
      {children}
    </MyContext.Provider>
  );
};
export default ContextProvider;
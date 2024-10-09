import React, { useState } from 'react';

const App3 = () => {
    const [clr,setclr] = useState();
  const buttonStyle = {
    backgroundColor: '#4CAF50', // Green background
    color: 'white', // White text
    padding: '15px 32px', // Padding
    textAlign: 'center', // Centered text
    textDecoration: 'none', // No underline
    display: 'inline-block', // Inline-block display
    fontSize: '16px', // Font size
    margin: '4px 2px', // Margin
    cursor: 'pointer', // Pointer cursor
    border: 'none', // No border
    borderRadius: '4px', // Rounded corners
  };
    const S = ()=>{
         setclr(buttonStyle);
    }
  return (
    <div>
      <h1>Inline Styles in React</h1>
      <button onClick={S} style={clr}>Click Me</button>
    </div>
  );
};

export default App3;

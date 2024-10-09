import React, { useState } from "react";

const Color = () => {
  const [color, changeColor] = useState('red'); // Initial state with 'red'

  // Define styles using an object
  const headingStyle = {
    color: color, // Apply the dynamic color from state
    fontSize: '36px',
    textAlign: 'center',
    padding: '10px'
  };

  const buttonStyle = {
    backgroundColor: 'black',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px'
  };

  const changeTextColor = () => {
    changeColor(color === 'red' ? 'blue' : 'red'); // Toggle color between red and blue
  }

  return (
    <>
      <h1 style={headingStyle}>HARSHAL</h1> {/* Apply the heading style object */}
      <button style={buttonStyle} onClick={changeTextColor}>Change Color</button> {/* Apply the button style object */}
    </>
  );
}

export default Color;

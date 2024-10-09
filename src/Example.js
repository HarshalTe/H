import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Example = () => {
  const [disabled, setDisabled] = useState(false);

  const toggleDisabled = () => {
    setDisabled((prev) => !prev); // Toggle the disabled state
  };

  return (
    <div>
      <Button onClick={toggleDisabled}>
        {disabled ? 'Enable' : 'Disable'} Input
      </Button>
      <TextField
        disabled={disabled} // Use disabled directly
        label="Sample Input"
        variant="outlined"
      />
    </div>
  );
};

export default Example;

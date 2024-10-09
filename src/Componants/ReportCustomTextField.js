import React from "react";
import TextField from "@mui/material/TextField";

function ReportCustomTextField({
  variant,
  size,
  id,
  label,
  name,
  disabled,
  value,
  onChange,
  multiline,
  type,
  ...props
}) {
  return (
    <TextField
      fullWidth
      multiline={multiline || false}
      variant={variant ?? "standard"}
      size={size ?? "small"}
      id={id ?? name ?? ""}
      label={label ?? ""}
      disabled={disabled || false}
      name={name ?? ""}
      type={type ?? "text"}
      inputProps={{ style: { fontSize: 14 } }}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
}

export default ReportCustomTextField;

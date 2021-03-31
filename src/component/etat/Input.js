import React from "react";
import { TextField } from "@material-ui/core";

function Input(props) {
  const { label, name, value, onChange, error = null, type, variant } = props;

  return (
    <TextField
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      {...(error && { error: true, heelperText: error })}
      type={type}
      variant={variant}
      size="small"
    />
  );
}

export default Input;

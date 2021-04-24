import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import React from "react";

function Combobox(props) {
  const { label, name, value, error = null, onChange, item } = props;

  return (
    <FormControl {...(error && { error: true })}>
      <InputLabel>{label}</InputLabel>
      <Select name={name} value={value} onChange={onChange}>
        <MenuItem value="">none</MenuItem>
        {item.map((item) => {
          return (
            <MenuItem key={item.id} value={item.designation}>
              {item.designation}
            </MenuItem>
          );
        })}
      </Select>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
}

export default Combobox;

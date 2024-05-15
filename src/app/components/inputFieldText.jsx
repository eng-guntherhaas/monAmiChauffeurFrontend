"use client";
import * as React from "react";
import TextField from "@mui/material/TextField";

export default function InputFieldText({ label, required }) {
  const [value, setValue] = React.useState("");
  const [shrink, setShrink] = React.useState(false);

  const handleFocus = () => {
    setShrink(true);
  };

  const handleBlur = () => {
    if (value === "") {
      setShrink(false);
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <TextField
        required={required}
        label={label}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        InputLabelProps={{
          shrink: shrink,
        }}
        value={value}
      />
    </>
  );
}

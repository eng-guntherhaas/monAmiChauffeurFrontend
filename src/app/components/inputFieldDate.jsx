"use client";
import * as React from "react";
import TextField from "@mui/material/TextField";

export default function InputFieldDate({ label, required }) {
  const [value, setValue] = React.useState(new Date());

  const handleChange = (e) => {
    const newValue = e.target.value;

    const dateValue = newValue ? new Date(newValue) : null;

    if (dateValue) {
      setValue(dateValue);
    }
  };

  return (
    <>
      <TextField
        required={required}
        label={label}
        type="date"
        onChange={handleChange}
        InputLabelProps={{
          shrink: true,
        }}
        value={value.toISOString().split("T")[0]}
      />
    </>
  );
}

"use client";
import * as React from "react";
import TextField from "@mui/material/TextField";

export default function InputFieldNumber({ label: initialLabel, required }) {
  const [value, setValue] = React.useState(1);
  const [label, setLabel] = React.useState(initialLabel);

  const handleChange = (e) => {
    const newValue = parseInt(e.target.value, 10);

    if (newValue >= 1) {
      setLabel(newValue === 1 ? initialLabel : "Passengers");
      setValue(newValue);
    }
  };

  return (
    <>
      <TextField
        required={required}
        label={label}
        type="number"
        onChange={handleChange}
        InputLabelProps={{
          shrink: true,
        }}
        value={value}
      />
    </>
  );
}

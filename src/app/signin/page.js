"use client";
import { TextField } from "@mui/material";

export default function SigninPage() {
  return (
    <>
      <TextField label="Email" required={true} />
      <TextField label="Mot de Passe" required={true} />
    </>
  );
}

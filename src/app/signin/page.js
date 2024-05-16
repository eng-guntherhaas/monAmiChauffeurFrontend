"use client";

import InputFieldText from "../components/inputFieldText";

export default function SigninPage() {
  return (
    <>
      <InputFieldText label="Email" required={true} />
      <InputFieldText label="Mot de Passe" required={true} />
    </>
  );
}

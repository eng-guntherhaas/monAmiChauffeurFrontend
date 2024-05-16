"use client";

import InputFieldText from "../components/inputFieldText";

export default function SignupPage() {
  return (
    <>
      <InputFieldText label="Nom" required={true} />
      <InputFieldText label="Prénom" required={true} />
      <InputFieldText label="Email" required={true} />
      <InputFieldText label="Mot de Passe" required={true} />
    </>
  );
}

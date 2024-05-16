"use client";
import { useState } from "react";
import {
  Button,
  TextField,
  FormControl,
  FormLabel,
  Typography,
  Grid,
} from "@mui/material";

export default function SignupPage() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    driversId: "",
    birthDate: new Date(),
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    // Call API to create or update user

    console.log("Submit user:", user);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  return (
    <Grid container justifyContent={"center"} alignItems={"center"} spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6">User Form</Typography>
      </Grid>

      <Grid item xs={6}>
        <FormControl fullWidth>
          <FormLabel>Nom</FormLabel>

          <TextField
            id="lastName"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
            variant="outlined"
          />
        </FormControl>
      </Grid>

      <Grid item xs={6}>
        <FormControl fullWidth>
          <FormLabel>Prénom</FormLabel>

          <TextField
            id="firstName"
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
            variant="outlined"
          />
        </FormControl>
      </Grid>

      <Grid item xs={6}>
        <FormControl fullWidth>
          <FormLabel>Email</FormLabel>

          <TextField
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            variant="outlined"
          />
        </FormControl>
      </Grid>

      <Grid item xs={6}>
        <FormControl fullWidth>
          <FormLabel>Mot de Passe</FormLabel>

          <TextField
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            variant="outlined"
            type="password"
          />
        </FormControl>
      </Grid>

      <Grid item xs={6}>
        <FormControl fullWidth>
          <FormLabel>Permis de Conduire</FormLabel>

          <TextField
            id="driversId"
            name="driversId"
            value={user.driversId}
            onChange={handleChange}
            variant="outlined"
          />
        </FormControl>
      </Grid>

      <Grid item xs={6}>
        <FormControl fullWidth>
          <FormLabel>Date de Naissance</FormLabel>

          <TextField
            id="birthDate"
            name="birthDate"
            value={user.birthDate}
            onChange={handleChange}
            variant="outlined"
            type="date"
          />
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Grid>
    </Grid>
  );
}

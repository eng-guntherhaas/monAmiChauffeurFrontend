"use client";
import { useState } from "react";
import {
  Button,
  TextField,
  FormControl,
  FormLabel,
  Grid,
  Box,
} from "@mui/material";

export default function SigninPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await AuthService.register(user);
      setMessage(response.data);
      if (response.data === "Connexion réussie") {
        router.push("/");
      }
    } catch (error) {
      setMessage("Informations d'identification invalides");
    }
    console.log("Submit user:", user);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item xs={12}>
          <FormControl>
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

        <Grid item xs={12}>
          <FormControl>
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

        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Se connecter
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

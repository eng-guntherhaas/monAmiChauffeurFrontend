"use client";
import { useState } from "react";
import {
  Button,
  TextField,
  FormControl,
  FormLabel,
  Typography,
  Grid,
  InputAdornment,
  IconButton,
  Box,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import AuthService from "../AuthService";

export default function SignupPage() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    driversId: "",
    birthDate: new Date(),
  });
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await AuthService.register(user);
      setMessage(response.data);
      if (response.data === "Utilisateur enregistré avec succès") {
        router.push("/signin");
      }
    } catch (error) {
      setMessage("");
    }
    console.log("Submit user:", user);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUser((prevUser) => ({ ...prevUser, [name]: value }));

    if (name === "password") {
      validatePassword(value);
    }
  };

  const validatePassword = (passwordValue) => {
    if (passwordValue.length < 8) {
      setPasswordError("Password must be at least 8 characters");
    } else if (!/[a-zA-Z]/.test(passwordValue)) {
      setPasswordError("Password must contain at least one letter");
    } else if (!/\d/.test(passwordValue)) {
      setPasswordError("Password must contain at least one number");
    } else {
      setPasswordError(null);
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
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
          <Typography variant="h6">User Form</Typography>
        </Grid>

        <Grid item xs={12}>
          <FormControl>
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

        <Grid item xs={12}>
          <FormControl>
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
          <FormControl error={passwordError !== null}>
            <FormLabel>Mot de Passe</FormLabel>

            <TextField
              id="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              variant="outlined"
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            {passwordError && (
              <Typography variant="caption" color="error">
                {passwordError}
              </Typography>
            )}
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl>
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

        <Grid item xs={12}>
          <FormControl>
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
    </Box>
  );
}

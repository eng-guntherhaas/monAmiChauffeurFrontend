"use client";
import React, { useState } from "react";
import {
  Button,
  Grid,
  TextField,
  Typography,
  Box,
  FormControl,
} from "@mui/material";
import MapComponent from "./map";

export default function SearchTrip() {
  const [searchData, setSearchData] = useState({
    departure: "",
    destination: "",
    passenger: 1,
    date: new Date().toISOString().split("T")[0],
  });

  const [isLoaded, setIsLoaded] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoaded(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchData((prevData) => ({ ...prevData, [name]: value }));
  };

  const getPassengerLabel = () => {
    if (searchData.passenger == 1) {
      return "Passager";
    } else {
      return "Passagers";
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography variant="h4" gutterBottom>
        Rechercher un voyage
      </Typography>

      <Grid container spacing={1}>
        <Grid item xs={12} sm={2}>
          <FormControl>
            <TextField
              label="Départ"
              required
              name="departure"
              value={searchData.departure}
              onChange={handleChange}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={2}>
          <FormControl>
            <TextField
              label="Destination"
              required
              name="destination"
              value={searchData.destination}
              onChange={handleChange}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={2}>
          <FormControl>
            <TextField
              label={getPassengerLabel()}
              required
              name="passenger"
              type="number"
              InputProps={{ inputProps: { min: "1" } }}
              value={searchData.passenger}
              onChange={handleChange}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={2}>
          <FormControl>
            <TextField
              label="Date"
              required
              type="date"
              name="date"
              value={searchData.date}
              onChange={handleChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Button type="submit" variant="contained">
            Rechercher
          </Button>
        </Grid>
      </Grid>
      <>{isLoaded && <MapComponent />}</>
    </Box>
  );
}

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
import OpenRouteMap from "./openRouteMap";

export default function SearchTrip() {
  const [searchData, setSearchData] = useState({
    departure: "",
    destination: "",
    passenger: 1,
    date: new Date().toISOString().split("T")[0],
  });

  const [geojsonData, setGeojsonData] = useState(null);
  const [departureSuggestions, setDepartureSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);
  const [departureCoords, setDepartureCoords] = useState(null);
  const [destinationCoords, setDestinationCoords] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(searchData);

    // const coordStart = "8.681495,49.41461";
    // const coordEnd = "8.687872,49.420318";

    // let request = new XMLHttpRequest();

    // request.open(
    //   "GET",
    //   `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${api_key}&start=${coordStart}&end=${coordEnd}`
    // );

    // request.setRequestHeader(
    //   "Accept",
    //   "application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8"
    // );

    // request.onreadystatechange = function () {
    //   if (this.readyState === 4) {
    //     const geojsonData = JSON.parse(this.responseText);
    //     setGeojsonData(geojsonData);
    //   }
    // };

    // request.send();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleInputChange = (e, type) => {
    const { value } = e.target;
    if (type === "departure") {
      setSearchData((prevData) => ({ ...prevData, departure: value }));
      getAutocompleteSuggestions(value, type);
    } else if (type === "destination") {
      setSearchData((prevData) => ({ ...prevData, destination: value }));
      getAutocompleteSuggestions(value, type);
    }
  };

  const getAutocompleteSuggestions = (input, type) => {
    const apiUrl = `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${apiKey}&input=${input}`;

    fetch(apiUrl)
      .then((response) => response.json())

      .then((data) => {
        if (type === "departure") {
          setDepartureSuggestions(data.predictions);
        } else if (type === "destination") {
          setDestinationSuggestions(data.predictions);
        }
      });
  };

  const handleSuggestionSelect = (suggestion, type) => {
    if (type === "departure") {
      setSearchData((prevData) => ({
        ...prevData,
        departure: suggestion.description,
      }));

      setDepartureCoords(suggestion.geometry.location);
    } else if (type === "destination") {
      setSearchData((prevData) => ({
        ...prevData,
        destination: suggestion.description,
      }));

      setDestinationCoords(suggestion.geometry.location);
    }
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
              onChange={(e) => handleInputChange(e, "departure")}
              onSelect={(suggestion) =>
                handleSuggestionSelect(suggestion, "departure")
              }
            />

            {departureSuggestions.length > 0 && (
              <ul>
                {departureSuggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    onClick={() =>
                      handleSuggestionSelect(suggestion, "departure")
                    }
                  >
                    {suggestion.description}
                  </li>
                ))}
              </ul>
            )}
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={2}>
          <FormControl>
            <TextField
              label="Destination"
              required
              name="destination"
              value={searchData.destination}
              onChange={(e) => handleInputChange(e, "destination")}
              onSelect={(suggestion) =>
                handleSuggestionSelect(suggestion, "destination")
              }
            />

            {destinationSuggestions.length > 0 && (
              <ul>
                {destinationSuggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    onClick={() =>
                      handleSuggestionSelect(suggestion, "destination")
                    }
                  >
                    {suggestion.description}
                  </li>
                ))}
              </ul>
            )}
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
      <>
        <OpenRouteMap geojsonData={geojsonData} />
      </>
    </Box>
  );
}

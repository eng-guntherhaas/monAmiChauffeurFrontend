import React, { useEffect, useState } from "react";
import {
  APIProvider,
  Map,
  useMapsLibrary,
  useMap,
} from "@vis.gl/react-google-maps";

export default function MapComponent() {
  const position = {
    lat: 48.85679,
    lng: 2.35108,
  };

  return (
    <>
      <div style={{ height: "50vh" }}>
        <APIProvider apiKey={"AIzaSyDh1voMIcxgg5H3ohdamfGyPQ4hFi3mpAI"}>
          <Map center={position} zoom={13} fullscreenControl={false}>
            <Directions />
          </Map>
        </APIProvider>
      </div>
    </>
  );
}

function Directions() {
  const map = useMap();
  const routesLibrary = useMapsLibrary("routes");
  const [directionsService, setDirectionsService] = useState();
  const [directionsRenderer, setDirectionsRenderer] = useState();
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    if (!routesLibrary || !map) return;
    setDirectionsService(new routesLibrary.DirectionsService());
    setDirectionsRenderer(new routesLibrary.DirectionsRenderer({ map }));
  }, [routesLibrary, map]);

  useEffect(() => {
    if (!directionsService || !directionsRenderer) return;

    directionsService
      .route({
        origin: "95 bd Romain Rolland, Montrouge",
        destination: "05 bd Romain Rolland",
        travelMode: google.maps.TravelMode.DRIVING,
        provideRouteAlternatives: true,
      })
      .then((response) => {
        directionsRenderer.setDirections(response);
        setRoutes(response.routes);
      });
  }, [directionsService, directionsRenderer]);

  return null;
}

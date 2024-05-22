// OpenRouteMap.js
import React, { useRef, useEffect } from "react";
import L from "leaflet";

export default function OpenRouteMap({ geojsonData }) {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    if (mapContainerRef.current && geojsonData) {
      const map = L.map(mapContainerRef.current).setView(
        [49.41461, 8.681495],
        13
      );

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.geoJSON(geojsonData).addTo(map);

      return () => {
        map.remove();
      };
    }
  }, [geojsonData]);

  return (
    <div
      id="map-container"
      ref={mapContainerRef}
      style={{ height: "400px" }}
    ></div>
  );
}

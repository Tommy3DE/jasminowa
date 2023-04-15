import React from "react";
import { GoogleMap, Marker } from "react-google-maps";

function Map() {
  return (
    <GoogleMap
      apiKey="AIzaSyD1meEVK830PVGq01pd6AakYYbV3iVCBls"
      defaultZoom={10}
      defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
    >
      <Marker position={{ lat: 37.7749, lng: -122.4194 }} />
    </GoogleMap>
  );
}

export default Map;
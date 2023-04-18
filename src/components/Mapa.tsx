const key = "AIzaSyD1meEVK830PVGq01pd6AakYYbV3iVCBls";

import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Element } from "react-scroll";

const containerStyle = {
  width: '100vw',
  height: '600px'
};

const center = {
  lat: 50.0565318,
  lng: 22.047835
};

function Mapa() {
  return (
    <Element name='lokalizacja'>
    <LoadScript
      googleMapsApiKey="AIzaSyA7Oo3MjWtDUZxU2-ebsoInbnKg5qGoTLE"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
    </Element>
  )
}

export default Mapa

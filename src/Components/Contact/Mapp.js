import { Box } from "@mui/material";
import React from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "./style.css";

const Mapp = () => {
  return (
    <Box border={3} borderColor={"#e5e5e5"} height={"60vh"}>
      <MapContainer
        center={[23.702028, 90.442944]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[23.702028, 90.442944]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </Box>
  );
};

export default Mapp;

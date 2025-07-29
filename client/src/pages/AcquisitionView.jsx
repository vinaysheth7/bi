import React, { useRef, useState } from "react";
import {
  GoogleMap,
  Marker,
  DrawingManager,
  useJsApiLoader,
} from "@react-google-maps/api";
import ChatWidget from "../components/Chat";

const center = { lat: 51.508742, lng: -0.12085 };
const containerStyle = { width: "100%", height: "500px" };


const dummyPin = { lat: 51.51, lng: -0.12 };

const AcquisitionView = () => {
  const [polygon, setPolygon] = useState(null);
  const [isVisible, setIsVisible] = useState(true); 
  const mapRef = useRef(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey:import.meta.env.VITE_GOOGLEAPI_KEY ,
    libraries: ["drawing", "geometry"],
  });

  const handleOverlayComplete = (e) => {
    if (polygon) polygon.setMap(null);
    const newPoly = e.overlay;
    setPolygon(newPoly);

    const google = window.google;
    const point = new google.maps.LatLng(dummyPin.lat, dummyPin.lng);
    const inside = google.maps.geometry.poly.containsLocation(point, newPoly);

    setIsVisible(inside); 
  };

  return isLoaded ? (
    <>
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={5}
      onLoad={(map) => (mapRef.current = map)}
    >
      {isVisible && <Marker position={dummyPin} title="Dummy Pin" />}

      <DrawingManager
        drawingMode="polygon"
        options={{
          drawingControl: true,
          drawingControlOptions: {
            position: window.google.maps.ControlPosition.TOP_CENTER,
            drawingModes: ["polygon"],
          },
          polygonOptions: {
            fillColor: "#FF0000",
            fillOpacity: 0.4,
            strokeWeight: 2,
            clickable: false,
            editable: true,
            zIndex: 1,
          },
        }}
        onOverlayComplete={handleOverlayComplete}
      />
    </GoogleMap>
    <ChatWidget></ChatWidget>
    </>
  ) : (
    <div>Loading...</div>
  );
};

export default AcquisitionView;



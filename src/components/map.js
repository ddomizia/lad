import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(30.687787);
  const [lat] = useState(38.185674462487874);
  const [zoom] = useState(2);
  const [API_KEY] = useState("NpaEYD1cCEf6bmrpKKm9");

  /* var geojson = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {
          message: "Çuka e Ajtoit",
          iconSize: [60, 60],
        },
        geometry: {
          type: "Point",
          coordinates: [20.12253778768466, 39.68267503234608],
        },
      },
    ],
  }; */

  useEffect(() => {
    if (map.current) return;
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/topo/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: zoom,
    });
    map.current.addControl(new maplibregl.NavigationControl(), "top-right");
    new maplibregl.Marker({ color: "#1963F7" })
      .setLngLat([20.1231788, 39.6812792])
      .addTo(map.current);
  });
  

  return (
    <Wrapper>
      <div className="map-wrap">
        <div ref={mapContainer} className="map" />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .map-wrap {
    position: relative;
    width: 100%;
    height: calc(
      50vh - 77px
    ); /* calculate height of the screen minus the heading */
  }

  .map {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

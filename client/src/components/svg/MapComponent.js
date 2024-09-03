import React, { useState } from 'react';
import { ReactComponent as MapSvg } from './us.svg'; // Assuming your SVG file is named us.svg and is in the same folder
import { useNavigate } from "react-router-dom";
import '../../styles/MapComponent.css'; // Import CSS file for styling
import statesMap from './statesMap'; // Import the statesMap.js which contains the mapping for U.S. states

function MapComponent() {
  const navigate = useNavigate();

  let [stateName, setStateName] = useState("");

  const handleRegionClick = (event) => {
    const stateIdNum = event.target.id;
    navigate(`/state/${stateIdNum}`);
  };

  const handleRegionHover = (event) => {
    const stateIdNum = event.target.id;
    const stateName = statesMap[stateIdNum];
    setStateName(stateName);
  }

  const goHomepage = () => {
    navigate("/");
  }

  return (
    <div>
      <h1 onClick={goHomepage} style={{ fontFamily: "Ubuntu", cursor: "pointer" }}>
        U.S. States Population Map
      </h1>
      <p>{stateName}&nbsp;</p>
      <div className="map-container">
        <MapSvg onMouseOver={handleRegionHover} onClick={handleRegionClick} />
      </div>
    </div>
  );
}

export default MapComponent;

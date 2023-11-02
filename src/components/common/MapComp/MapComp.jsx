import React from 'react';
import WorldMap from "react-svg-worldmap";

const MapComp = () => {
    const data = [
        // { country: "in", value: 1311559204 }, // india
        { country: "ch", value: 1311559204 }, // india

        
      ];
  return (
    <WorldMap
    color="red"
    // title="Top 10 Populous Countries"
    value-suffix="people"
    size="lg"
    data={data}
  />
  )
}

export default MapComp
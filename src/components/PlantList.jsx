import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {
  return (
    <ul className="cards">{plants.map(p => <PlantCard key={p.id} {...p} />)}</ul>
  );
}

export default PlantList;

import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [query, setQuery] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(r => r.json())
    .then(data => setPlants(data))
  }, [])

  const filteredPlants = query ? plants.filter(p => p.name.toLowerCase().includes(query.toLowerCase())) : plants

  return (
    <main>
      <NewPlantForm setPlants={setPlants} />
      <Search setQuery={setQuery} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;

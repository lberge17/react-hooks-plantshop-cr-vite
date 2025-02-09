import React, { useState } from "react";

function NewPlantForm({setPlants}) {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState(0)

  const handleSubmit = e => {
    e.preventDefault()
    
    const newPlant = {name, image, price}

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlant)
    })
    .then(r => r.json())
    .then(data => setPlants(pPlants => [...pPlants, data]))
  }

  const handleChange = handler => {
    return e => handler(e.target.value)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={name} onChange={handleChange(setName)} />
        <input type="text" name="image" placeholder="Image URL" value={image} onChange={handleChange(setImage)} />
        <input type="number" name="price" step="0.01" placeholder="Price" value={price} onChange={handleChange(setPrice)} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;

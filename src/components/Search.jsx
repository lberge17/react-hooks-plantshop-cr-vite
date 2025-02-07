import React from "react";

function Search({setQuery}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

export default Search;

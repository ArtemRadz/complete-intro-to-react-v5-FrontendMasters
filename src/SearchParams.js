import React, { useState } from "react";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            type="text"
            value={location}
            onChange={e => setLocation(e.target.value)}
            placeholder="Location"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;

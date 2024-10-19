import { useState } from "react";
import "./Country.css";
const Country = ({ country, handleVisitedCountries, handleVisitedFlags }) => {
  const { name, flags, population, area, cca3 } = country;
  const [isVisited, setVisited] = useState(false);

  const handleVisit = () => {
    setVisited(!isVisited);
  };

  // console.log(handleVisitedCountries);
  return (
    <>
      <div className={`country ${isVisited && "visited"}`}>
        <div style={{ color: isVisited && "white" }}>
          <h1>Name: {name.common}</h1>
          <h4>Population: {population}</h4>
          <h4>Area: {area}</h4>
          <h4>Code: {cca3}</h4>
          <button onClick={handleVisit}>
            {isVisited ? "Visited" : "Going"}
          </button>
          <button onClick={() => handleVisitedFlags(country.flags.png)}>
            Add Flag
          </button>
          <button
            onClick={() => {
              handleVisitedCountries(country);
            }}
          >
            Mark as Visited
          </button>
        </div>
        <div>
          <img className="image" src={flags.svg} alt="" />
        </div>
      </div>
    </>
  );
};

export default Country;

import "./propertyList.css";
import React, { useState } from 'react';


import { Link } from "react-router-dom";

const PropertyList = () => {
  const [cityName, setCityName] = useState('');
  const [iataCode, setIataCode] = useState('');
  const [error, setError] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  console.log("nametypez", cityName)

  const cityToIataMapping = {
    'Mumbai': 'BOM',
    'Delhi': 'DEL',
    'Bangalore': 'BLR',
    'Chennai': 'MAA',
    'Kolkata': 'CCU',
    'Hyderabad': 'HYD',
    'Ahmedabad': 'AMD',
    'Pune': 'PNQ',
    'Amritsar': 'ATQ',
    'Patna': 'PAT',
    'Goa': 'GOI',
    'Raipur': 'RPR',
    'Jammu': 'IXJ',
    'Dehradun': 'DED',
    'Jaipur': 'JAI',
  };
  const handleCityNameChange = (event) => {
    const inputCity = event.target.value;
    setCityName(inputCity);

    // Filter cities based on the input
    const filteredSuggestions = Object.keys(cityToIataMapping).filter(city =>
      city.toLowerCase().includes(inputCity.toLowerCase())


      );
      
      
    // console.log("filter",filteredSuggestions)
    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (selectedCity) => {
    setCityName(selectedCity);
    setSuggestions([]); // Clear suggestions when a suggestion is clicked

    
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("clicked")
    const city = cityName.trim();
    console.log(city)
      if (cityToIataMapping.hasOwnProperty(city)) {
        console.log("hello")
        setIataCode(cityToIataMapping[city]);
        setError('');
      } else {
        console.log("hellob")
        setIataCode('');
        setError('City not found or mapping not available.');
      }

  };
  // console.log("code",iataCode)
  // console.log("name",cityName)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter City Name:
          <input
            type="text"
            value={cityName}
            onChange={handleCityNameChange}
            placeholder="Type a city name..."
            className="suggestion-input"
          />
        </label>
        <Link to="/HotelList" state={{ city: cityName }}>
        <button type="submit" className="suggestion-button">Search</button>
        </Link>
      </form>

      {suggestions.length > 0 && (
        <ul className="suggestion-list">
          {suggestions.map((city, index) => (
            <li key={index} className="suggestion-item" onClick={() => handleSuggestionClick(city)}>
              {city}
            </li>
          ))}
        </ul>

      )}

      {error && <p>{error}</p>}


    </div>
  );
};

export default PropertyList;

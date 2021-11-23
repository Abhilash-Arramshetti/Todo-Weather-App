import axios from "axios";
import React, { useState } from "react";

function Weather() {
  const [city, setCity] = useState("");
  const [result, setResult] = useState("");
  const handleChange = (e) => {
    setCity(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`
      )
      .then((response) => {
        const kelvin = response.data.main.temp;
        const celsius = kelvin - 273.15;
        setResult(
          "The Temperature at " +
            city.toUpperCase() +
            " is \n" +
            Math.round(celsius) +
            " °C"
        );
      });
    setCity("");
  };
  return (
    <div>
      <form>
        <input type="text" value={city} onChange={handleChange}></input>
        <button onClick={handleSubmit}>Submit</button>
      </form>
      <h2>{result}</h2>
    </div>
  );
}

export default Weather;

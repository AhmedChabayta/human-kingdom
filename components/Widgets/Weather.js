import React, { useEffect, useState } from "react";

function Weather() {
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("ramallah");
  const API_KEY = "2b91f59997bc611f59a43bfe6f9ce887";

  const getWeather = (event) => {
    if (event.key === "Enter") {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => setWeatherData(data));
      setCity("");
      return;
    }
  };
  return (
    <div className="flex flex-col items-center py-10 justify-center group">
      <p className="text-orange-500 py-2 invisible group-hover:visible">
        <a href="https://openweathermap.org/" target="_void">
          UsingOpenWeatherMap
        </a>
      </p>
      <input
        onChange={(event) => setCity(event.target.value)}
        onKeyPress={getWeather}
        placeholder="Search Weather"
        className="text-orange-500 bg-transparent rounded-2xl p-2 px-4 placeholder:text-blue-500/50 placeholder:text-xl text-center focus:outline-none"
      />
      {typeof weatherData.main === "undefined" ? (
        " "
      ) : (
        <div className="text-white flex flex-col space-y-2 items-center justify-center p-10">
          <h1 className="text-orange-500">{weatherData.name}</h1>
          <h1 className="text-6xl text-blue-500">
            {Math.round(weatherData.main.temp)}° C
          </h1>
          <div className="flex flex-col justify-start w-full">
            <p className="text-blue-500">
              <span className="text-orange-500">Feeks like: </span>
              {weatherData.main.feels_like}° C{" "}
            </p>
            <p className="text-blue-500">
              <span className="text-orange-500">Pressure: </span>
              {weatherData.main.pressure}mb
            </p>
            <p className="text-blue-500">
              <span className="text-orange-500">Humidity: </span>
              {weatherData.main.humidity}
            </p>
          </div>
          <h1 className="text-blue-500">{weatherData.weather[0].main}</h1>
        </div>
      )}
      {weatherData.cod === "404" ? (
        <p className="text-red-600 py-5 whitespace-nowrap">
          Did you misspell that?
        </p>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Weather;

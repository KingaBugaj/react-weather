import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import WeatherFooter from "./WeatherFooter";
import "./Weather.css";
import axios from "axios";
import background from "./background.png";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      cityName: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });
  }
  function search() {
    const apiKey = "62adc1ac7dfc036aa7bc43938cb7257f";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div
          style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundColor: "rgba(255,0,0,0.5)",
          }}
        >
          <form onSubmit={handleSubmit}>
            <input
              className="enterCity"
              type="search"
              placeholder="Enter a city"
              onChange={handleCityChange}
            />

            <input
              type="submit"
              value="Search"
              className="button-search searchCity"
            />
          </form>

          <WeatherInfo data={weatherData} />

          <WeatherForecast city={weatherData.cityName} />
          <WeatherFooter />
        </div>
      </div>
    );
  } else {
    search();
    return (
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        Loading...
      </div>
    );
  }
}

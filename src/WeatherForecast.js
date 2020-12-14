import React, { useState } from "react";
import WeatherForecastPreview from "./WeatherForecastPreview";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <WeatherForecastPreview data={forecast.list[0]} />

          <WeatherForecastPreview data={forecast.list[1]} />

          <WeatherForecastPreview data={forecast.list[2]} />

          <WeatherForecastPreview data={forecast.list[3]} />

          <WeatherForecastPreview data={forecast.list[4]} />
        </div>
      </div>
    );
  } else {
    let apiKey = "62adc1ac7dfc036aa7bc43938cb7257f";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&units=metric&appid=${apiKey}`;
    axios.get(url).then(handleForecastResponse);
    return "Hey";
  }
}

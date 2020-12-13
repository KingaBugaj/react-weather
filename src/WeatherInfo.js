import React from "react";
import Formatteddate from "./Formatteddate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.cityName}</h1>
      <ul>
        <li>
          <Formatteddate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src={props.data.icon} alt="{weatherData.description}" />
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          °C
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity:{props.data.humidity}</li>
            <li>Wind: {props.data.wind}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

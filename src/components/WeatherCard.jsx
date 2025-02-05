/* eslint-disable react/prop-types */

import "../css/WeatherCard.css";
import { getClimateDetails, getIconPath } from "../weatherImage";
const WeatherCard = ({ currentWeather, currentUnits }) => {
  const imageSource = getIconPath(
    currentWeather?.weather_code,
    currentWeather?.is_day
  );
  // console.log(imageSource);

  const climateDetails = getClimateDetails(currentWeather?.weather_code);
  return (
    <div className="weatherCard-container">
      <div className="WeatherCard-mainCard">
        <div className="WeatherCard-maincard-child">
          <span className="WeatherCard-maincard-child-place">
            {currentWeather?.temperature_2m}
            {currentUnits?.temperature_2m}{" "}
          </span>
          <p className="WeatherCard-maincard-child-place-code">
            {currentWeather.name}
          </p>
          <p className="WeatherCard-maincard-child-place-code">
            {currentWeather.timezone}
          </p>
        </div>
        <div className="WeatherCard-maincard-child mx-auto">
          <img
            className="WeatherCard-maincard-child-weather "
            src={imageSource}
          ></img>
          <p className="WeatherCard-maincard-child-place-code">
            {climateDetails}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;

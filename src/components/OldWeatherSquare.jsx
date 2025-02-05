/* eslint-disable react/prop-types */
import "../css/oldWeathersquare.css";
import { getIconPath } from "../weatherImage";

const OldWeatherSquare = ({ max, min, time, unit, weather_code, is_day }) => {
  const imageSource = getIconPath(weather_code, is_day);
  return (
    <div className="oldWeathersquare-container">
      <div className="oldWeathersquare-weather_code-image">
        <img src={imageSource} className="oldWeathersquare-image-style"></img>
      </div>
      <div className="oldWeathersquare-min-max-temp">
        <span>
          <p className="oldWeathersquare-label">Min</p>
          <p className="oldWeathersquare-text-value">
            {min}
            {unit}
          </p>
        </span>
        <span>
          <p className="oldWeathersquare-label">Max</p>
          <p className="oldWeathersquare-text-value">
            {max}
            {unit}
          </p>
        </span>
      </div>
      <div className="oldWeathersquare-date">
        <span>{time}</span>
      </div>
    </div>
  );
};

export default OldWeatherSquare;

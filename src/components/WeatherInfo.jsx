/* eslint-disable react/prop-types */
import "../css/WeatherCard.css";
import "../css/WeatherInfo.css";

const WeatherInfo = ({ currentWeather, currentUnits }) => {
  return (
    <div className="weatherCard-container">
      <div
        className="WeatherCard-mainCard"
        style={{ backgroundColor: "#4a5565", color: "#ffffff" }}
      >
        <div className="WeatherCard-maincard-child-info">
          <div className="WeatherCard-maincard-child-info-div">
            <span className="WeatherCard-maincard-child-info-span">
              <span>
                <img style={{ height: "50px" }} src="/assets/wind.svg"></img>
              </span>
              <span>Wind Speed - </span>
            </span>
            <span style={{ fontWeight: "bolder" }}>
              {currentWeather?.wind_speed_10m}
              {currentUnits?.wind_speed_10m}
            </span>
          </div>

          <div className="WeatherCard-maincard-child-info-div">
            <span className="WeatherCard-maincard-child-info-span">
              <span>
                <img
                  style={{ height: "50px" }}
                  src={`/assets/clear${
                    currentWeather.is_day !== 0 ? "" : "-night"
                  }.svg`}
                ></img>
              </span>
              <span>Day or Night - </span>
            </span>
            <span style={{ fontWeight: "bolder" }}>
              {currentWeather.is_day !== 0 ? "Day" : "Night"}
            </span>
          </div>

          <div className="WeatherCard-maincard-child-info-div">
            <span className="WeatherCard-maincard-child-info-span">
              <span>
                <img
                  style={{ height: "30px", margin: "0.2rem 0.4rem" }}
                  src="/assets/thermometer.svg"
                ></img>
              </span>
              <span>Feels like temp - </span>
            </span>
            <span style={{ fontWeight: "bolder" }}>
              {currentWeather?.apparent_temperature}
              {currentUnits?.apparent_temperature}
            </span>
          </div>

          <div className="WeatherCard-maincard-child-info-div">
            <span className="WeatherCard-maincard-child-info-span">
              <span>
                <img
                  style={{ height: "50px" }}
                  src="/assets/humidity.svg"
                ></img>
              </span>
              <span>Humidity - </span>
            </span>
            <span style={{ fontWeight: "bolder" }}>
              {currentWeather?.relative_humidity_2m}
              {currentUnits.relative_humidity_2m}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;

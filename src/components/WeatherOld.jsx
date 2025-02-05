/* eslint-disable react/prop-types */
import "../css/WeatherCard.css";
import OldWeatherSquare from "./OldWeatherSquare";

const WeatherOld = ({ dailyWeather }) => {
  return (
    <div className="weatherCard-container">
      <div
        className="WeatherCard-mainCard"
        style={{ backgroundColor: "#4a5565", color: "#ffffff" }}
      >
        <div
          className="WeatherCard-maincard-child-info"
          style={{
            display: "flex",
            overflow: "auto",
            justifyContent: "space-evenly",
          }}
        >
          {Object.keys(dailyWeather).length > 0
            ? dailyWeather?.temperature_2m_max.map((element, ind) => (
                <OldWeatherSquare
                  key={ind}
                  max={dailyWeather?.temperature_2m_max[ind]}
                  min={dailyWeather?.temperature_2m_min[ind]}
                  time={dailyWeather?.time[ind]}
                  weather_code={dailyWeather?.weather_code[ind]}
                  unit={dailyWeather?.unit}
                  is_day={dailyWeather?.is_day}
                ></OldWeatherSquare>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default WeatherOld;

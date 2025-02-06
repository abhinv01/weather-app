/* eslint-disable react/prop-types */
import "../css/WeatherCard.css";
import "../css/WeatherInfo.css";

const WeatherInfo = ({ currentWeather, currentUnits }) => {
  const getTimeFormatted = (isoTimeString) => {
    try {
      // Parse the ISO 8601 time string
      let dt = new Date(isoTimeString);

      // Check if the date is valid. If not, it's an invalid format.
      if (isNaN(dt)) {
        return "Invalid ISO 8601 format";
      }

      // Convert to IST (using toLocaleString with options)
      const istOptions = {
        timeZone: "Asia/Kolkata",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false, // Use 24-hour format
      };
      const istString = dt.toLocaleString("en-IN", istOptions); // Use Indian locale for date formatting

      // Reformat to YYYY/MM/DD HH:MM
      const parts = istString.split(", ");
      const datePart = parts[0].split("/");
      const formattedDate = `${datePart[2]}/${datePart[1]}/${datePart[0]}`;
      const timePart = parts[1];
      const formattedTime = `${formattedDate} ${timePart}`;

      return formattedTime;
    } catch (error) {
      return `An error occurred: ${error.message}`; // More specific error message
    }
  };

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
                <img style={{ height: "40px" }} src="/assets/watch.svg"></img>
              </span>
              <span>Local time - </span>
            </span>
            <span style={{ fontWeight: "bolder" }}>
              {getTimeFormatted(currentWeather?.time)}
              {/* {currentUnits?.wind_speed_10m} */}
            </span>
          </div>

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

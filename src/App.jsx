import { useRef, useState } from "react";
import "./App.css";
import WeatherCard from "./components/WeatherCard";
import WeatherInfo from "./components/WeatherInfo";
import WeatherOld from "./components/WeatherOld";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Vanilla from "./components/Vanilla";

function App() {
  const [location, setLocation] = useState("");
  const [locationSearchData, setLocationSearchData] = useState([]);
  const [currentWeather, setCurrentWeather] = useState({});
  const [units, setUnits] = useState({});
  const [dailyWeather, setDailyWeather] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const timerRef = useRef(null);

  const getPlace = () => {
    if (location) {
      fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${location}`)
        .then((res) => res.json())
        .then((val) => {
          console.log(val);
          if (val.results) setLocationSearchData(val.results);
          else setLocationSearchData([{ name: "No city found" }]);
        })
        .catch((e) => console.log(e));
    }
  };

  const searchPlace = (e) => {
    //debouncing concept
    clearTimeout(timerRef.current);
    setLocation(e.target.value);
    const timeout = setTimeout(() => getPlace(e.target.value), 2000);
    timerRef.current = timeout;
  };

  const getClimateData = (lat, lon, name, country, timezone) => {
    if (lat && lon) {
      const days = 3;
      setIsLoading(true);
      setLocation("");
      setLocationSearchData([]);
      fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,apparent_temperature,relative_humidity_2m,is_day,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto&past_days=${days}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setCurrentWeather({ ...data.current, name, country, timezone });
          setUnits({ ...data.current_units });
          setDailyWeather({
            temperature_2m_max: data.daily.temperature_2m_max.slice(0, days),
            temperature_2m_min: data.daily.temperature_2m_min.slice(0, days),
            time: data.daily.time.slice(0, days),
            weather_code: data.daily.weather_code.slice(0, days),
            unit: data.daily_units.temperature_2m_max,
            is_day: 0,
          });
          setIsLoading(false);
        });
    }
  };

  return (
    <>
      <Header></Header>
      <Vanilla dat="vbhkj"></Vanilla>
      <div className="w-full min-h-[100vh] bg-gradient-to-r from-gray-300 via-white to-slate-200 relative">
        <div className="text-center p-4">
          <div className="relative">
            <input
              value={location}
              type="text"
              placeholder="Enter location"
              className="py-3 px-6 bg-gray-100  w-[100%] md:w-[70%] text-lg rounded-3xl border border-gray-200 text-gray-600 placeholder:text-gray-400 focus:outline-none focus:border-gray-400 focus:border-2 shadow-md relative"
              onChange={searchPlace}
            />

            {location.length > 0 ? (
              <ul className="absolute top-16 left-[50%] -translate-x-1/2 w-[100%] md:w-[70%] max-h-80 bg-opacity-50 bg-slate-400 backdrop-blur-md rounded overflow-x-hidden p-2 z-10">
                {locationSearchData.length > 0 ? (
                  locationSearchData.map((element) => {
                    return (
                      <li
                        key={element.id}
                        className="flex my-2 items-center gap-2 cursor-pointer hover:bg-slate-100"
                        onClick={() =>
                          getClimateData(
                            element.latitude,
                            element.longitude,
                            element?.name,
                            element?.country,
                            element?.timezone
                          )
                        }
                      >
                        {element?.name}, {element?.country} -{" "}
                        {element?.timezone}
                      </li>
                    );
                  })
                ) : (
                  <Loader></Loader>
                )}
              </ul>
            ) : null}
          </div>
        </div>
        {isLoading ? (
          <Loader />
        ) : Object.keys(dailyWeather).length > 0 ? (
          <>
            <WeatherCard currentWeather={currentWeather} currentUnits={units} />
            <WeatherInfo currentWeather={currentWeather} currentUnits={units} />
            <WeatherOld dailyWeather={dailyWeather} />
          </>
        ) : null}
      </div>
    </>
  );
}

export default App;

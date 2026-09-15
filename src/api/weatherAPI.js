import axios from "axios";

/* LATITUDINE E LONGITUDINE DI LODI PER OPER-METEO */
const LATITUDE = 45.3142;
const LONGITUDE = 9.5033;

const BASE_URL = "https://api.open-meteo.com/v1/forecast";

export function fetchCityWeather() {
  return axios
    .get(BASE_URL, {
      params: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        current:
          "temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,surface_pressure",
        hourly: "temperature_2m,weather_code",
        daily: "weather_code,temperature_2m_max,temperature_2m_min",
        timezone: "Europe/Rome",
        forecast_days: 7,
      },
    })
    .then((response) => response.data)
    .catch((err) => {
      console.error("Errore API meteo:", err);
      throw err;
    });
}

import { useEffect, useState } from "react";
import "../assets/css/homepage.css";
import HeroContent from "../components/HeroContent";
import HourlyForecast from "../components/HourlyForecast";
import WeeklyForecast from "../components/WeeklyForecast";
import LoadingScreen from "../components/LoadingScreen";
import ErrorMessage from "../components/ErrorMessage";

/* API */
import { fetchCityWeather } from "../api/weatherAPI";
import { getWeatherInfo } from "../utils/weatherCode";

export default function Homepage() {
  
  /* CONSTANTI useState */
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /* FUNZIONE RECUPERO PREVISIONI METEO */
  function loadWeather() {
    fetchCityWeather()
      .then((data) => setWeather(data))
      .catch((err) => {
        console.error(err);
        setError("Impossibile caricare i dati meteo");
      })
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    loadWeather();
  }, []);

  if (loading) return <LoadingScreen />;
  if (error) return <ErrorMessage message={error} />;

  /* RECUPERO ICONA E CONDIZIONE METEO */
  const { icon, condition } = getWeatherInfo(weather.current.weather_code);

  /* MOSTRARE NELLA CARD ORARIA LE PREVISIONI UN ORA DOPO DELLA VISITA DEL SITO PER LE SUCCESSIVE 24 ORE */
  const currentHour = weather.current.time;

  const futureHourlyIndexes = weather.hourly.time
    .map((time, index) => ({ time, index }))
    .filter(({ time }) => time > currentHour)
    .slice(0, 24);

  /* DATI ORARI PER CARD ORARIA */
  const hourlyData = futureHourlyIndexes.map(({ time, index }) => {
    const info = getWeatherInfo(weather.hourly.weather_code[index]);
    return {
      time: time.split("T")[1],
      temperature: Math.round(weather.hourly.temperature_2m[index]),
      condition: info.condition,
      icon: info.icon,
    };
  });

  /* CONVERTIRE LA DATA IN NOME GIORNO DELLA SETTIMANA */
  function toWeekdayShort(dateStr) {
    const date = new Date(dateStr);
    const label = date.toLocaleDateString("it-IT", { weekday: "short" });
    return (
      label.charAt(0).toUpperCase() +
      label.slice(1).replace(".", "").toUpperCase()
    );
  }

  /* DATI GIORNALIERI PER CARD SETTIMANALE */
  const dailyData = weather.daily.time.map((day, index) => {
    const info = getWeatherInfo(weather.daily.weather_code[index]);
    return {
      day: toWeekdayShort(day),
      tempMax: Math.round(weather.daily.temperature_2m_max[index]),
      tempMin: Math.round(weather.daily.temperature_2m_min[index]),
      icon: info.icon,
    };
  });

  /* CAMBIARE IL MESSAGGIO DI SALUTO IN BASE ALL'ORARIO DI VISITA DEL SITO */
  function getGreeting(dateStr) {
    const hour = new Date(dateStr).getHours();

    if (hour >= 5 && hour < 12) return "Buongiorno";
    if (hour >= 12 && hour < 18) return "Buon pomeriggio";
    if (hour >= 18 && hour < 22) return "Buonasera";

    return "Buonanotte";
  }

  /* MOSTRARE LA DATA NELLA HERO AGGIORANTA ALLA DATA DI VISITA DEL SITO */
  function formatFullDate(dateStr) {
    const date = new Date(dateStr);
    const formatted = date.toLocaleDateString("it-IT", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    return formatted.charAt(0).toUpperCase() + formatted.slice(1);
  }

  return (
    <>
      <section className="hero">
        {/* BACKGROUND IMAGE */}
        <div className="hero-bg"></div>

        {/* BACKGROUND GRADIENT EFFECT */}
        <div className="hero-overlay"></div>

        {/* WEATHER CONTENTS */}
        <div className="hero-content">
          <HeroContent
            greeting={`${getGreeting(weather.current.time)} da Lodi`}
            date={formatFullDate(weather.current.time)}
            temperature={Math.round(weather.current.temperature_2m)}
            condition={condition}
            feelsLike={Math.round(weather.current.apparent_temperature)}
            humidity={weather.current.relative_humidity_2m}
            wind={Math.round(weather.current.wind_speed_10m)}
            pressure={Math.round(weather.current.surface_pressure)}
            icon={icon}
          />
          <div className="forecast-row">
            <HourlyForecast hours={hourlyData} />
            <WeeklyForecast days={dailyData} />
          </div>
        </div>
      </section>
    </>
  );
}

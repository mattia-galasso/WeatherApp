import { useState } from "react";
import "../assets/css/hourlyforecast.css";

const VISIBLE_COUNT = 6;

export default function HourlyForecast({ hours }) {
  const [startIndex, setStartIndex] = useState(0);
  const maxStart = hours.length - VISIBLE_COUNT;

  const visibleHours = hours.slice(startIndex, startIndex + VISIBLE_COUNT);

  const goPrev = () => setStartIndex((i) => Math.max(0, i - 1));
  const goNext = () => setStartIndex((i) => Math.min(maxStart, i + 1));

  
  return (
    <div className="forecast-card">
      {/* HOURLY HEADER */}
      <div className="forecast-header">
        <span className="forecast-title">
          <i className="bi bi-clock-fill"></i> Previsioni orarie
        </span>
        <div className="forecast-nav">
          <button
            type="button"
            className="forecast-nav-btn"
            onClick={goPrev}
            disabled={startIndex === 0}
            aria-label="Ore precedenti"
          >
            <i className="bi bi-chevron-left"></i>
          </button>
          <button
            type="button"
            className="forecast-nav-btn"
            onClick={goNext}
            disabled={startIndex === maxStart}
            aria-label="Ore successive"
          >
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>

      {/* HOURLY LIST */}
      <div className="hourly-list">
        {visibleHours.map((hour) => (
          <div className="hourly-item" key={hour.time}>
            <span className="hourly-time">{hour.time}</span>
            <i className={`bi ${hour.icon} hourly-icon`}></i>
            <span className="hourly-temp">{hour.temperature}°</span>
          </div>
        ))}
      </div>
    </div>
  );
}

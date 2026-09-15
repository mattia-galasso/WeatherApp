import "../assets/css/hourlyforecast.css";
import "../assets/css/forecast-shared.css";
import { usePagination } from "../hooks/usePagination";

export default function HourlyForecast({ hours }) {
  const { visibleItems, goPrev, goNext, isFirst, isLast } = usePagination(hours);

  
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
            disabled={isFirst}
            aria-label="Ore precedenti"
          >
            <i className="bi bi-chevron-left"></i>
          </button>
          <button
            type="button"
            className="forecast-nav-btn"
            onClick={goNext}
            disabled={isLast}
            aria-label="Ore successive"
          >
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>

      {/* HOURLY LIST */}
      <div className="hourly-list">
        {visibleItems.map((hour) => (
          <div className="hourly-item" key={hour.time}>
            <span className="hourly-time">{hour.time}</span>
            <span className="hourly-icon">{hour.icon}</span>
            <span className="hourly-temp">{hour.temperature}°</span>
          </div>
        ))}
      </div>
    </div>
  );
}

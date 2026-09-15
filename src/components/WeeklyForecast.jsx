import "../assets/css/weeklyforecast.css";
import "../assets/css/forecast-shared.css";
import { usePagination } from "../hooks/usePagination";

export default function WeeklyForecast({ days }) {
  const { visibleItems, goPrev, goNext, isFirst, isLast } = usePagination(days);

  return (
    <div className="forecast-card">
      {/* WEEKLY HEADER */}
      <div className="forecast-header">
        <span className="forecast-title">
          <i className="bi bi-calendar-week-fill"></i> Previsioni settimanali
        </span>
        <div className="forecast-nav">
          <button
            type="button"
            className="forecast-nav-btn"
            onClick={goPrev}
            disabled={isFirst}
            aria-label="Giorni precedenti"
          >
            <i className="bi bi-chevron-left"></i>
          </button>
          <button
            type="button"
            className="forecast-nav-btn"
            onClick={goNext}
            disabled={isLast}
            aria-label="Giorni successivi"
          >
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>

      {/* WEEKLY LIST */}
      <div className="weekly-list">
        {visibleItems.map((day) => (
          <div className="weekly-item" key={day.day}>
            <span className="weekly-day">{day.day}</span>
            <span className="weekly-icon">{day.icon}</span>
            <span className="weekly-temp-max">{day.tempMax}°</span>
            <span className="weekly-temp-min">{day.tempMin}°</span>
          </div>
        ))}
      </div>
    </div>
  );
}

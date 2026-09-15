import "../assets/css/weeklyforecast.css";

export default function WeeklyForecast({ days }) {
  return (
    <div className="forecast-card">
      
      {/* WEEKLY HEADER */}
      <div className="forecast-header">
        <span className="forecast-title">
          <i className="bi bi-calendar-week-fill"></i> Previsioni settimanali
        </span>
      </div>

      {/* WEEKLY LIST */}
      <div className="weekly-list">
        {days.map((day) => (
          <div className="weekly-item" key={day.day}>
            <span className="weekly-day">{day.day}</span>
            <i className={`bi ${day.icon} weekly-icon`}></i>
            <span className="weekly-temp-max">{day.tempMax}°</span>
            <span className="weekly-temp-min">{day.tempMin}°</span>
          </div>
        ))}
      </div>
    </div>
  );
}
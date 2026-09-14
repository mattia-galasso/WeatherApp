import "../assets/css/weeklyforecast.css";

const weeklyPlaceholder = [
  { day: "DOM", tempMax: 23, tempMin: 12, icon: "bi-sun-fill" },
  { day: "LUN", tempMax: 24, tempMin: 13, icon: "bi-cloud-sun-fill" },
  { day: "MAR", tempMax: 25, tempMin: 14, icon: "bi-sun-fill" },
  { day: "MER", tempMax: 22, tempMin: 14, icon: "bi-clouds-fill" },
  { day: "GIO", tempMax: 19, tempMin: 12, icon: "bi-cloud-rain-fill" },
  { day: "VEN", tempMax: 21, tempMin: 11, icon: "bi-sun-fill" },
];

export default function WeeklyForecast({ days = weeklyPlaceholder }) {
  return (
    <div className="forecast-card">
      <div className="forecast-header">
        <span className="forecast-title">
          <i className="bi bi-calendar-week-fill"></i> Previsioni settimanali
        </span>
        <i className="bi bi-chevron-right forecast-arrow"></i>
      </div>

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
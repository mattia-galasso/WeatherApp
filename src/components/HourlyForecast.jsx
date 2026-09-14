import "../assets/css/hourlyforecast.css";
/* 
 ! PLACEHOLDER 
*/
const hourlyPlaceholder = [
  { time: "14:00", temperature: 22, icon: "bi-sun-fill" },
  { time: "15:00", temperature: 22, icon: "bi-sun-fill" },
  { time: "16:00", temperature: 21, icon: "bi-cloud-sun-fill" },
  { time: "17:00", temperature: 20, icon: "bi-clouds-fill" },
  { time: "18:00", temperature: 19, icon: "bi-clouds-fill" },
  { time: "19:00", temperature: 18, icon: "bi-clouds-fill" },
];

export default function HourlyForecast({ hours = hourlyPlaceholder }) {
  return (
    <div className="forecast-card">
      <div className="forecast-header">
        <span className="forecast-title">
          <i className="bi bi-clock-fill"></i> Previsioni orarie
        </span>
        <i className="bi bi-chevron-right forecast-arrow"></i>
      </div>

      <div className="hourly-list">
        {hours.map((h) => (
          <div className="hourly-item" key={h.time}>
            <span className="hourly-time">{h.time}</span>
            <i className={`bi ${h.icon} hourly-icon`}></i>
            <span className="hourly-temp">{h.temperature}°</span>
          </div>
        ))}
      </div>
    </div>
  );
}

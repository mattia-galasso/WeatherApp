import "../assets/css/herocontent.css";

export default function HeroContent({
  city = "Lodi, Italia",
  greeting = "Buongiorno da Lodi",
  date,
  temperature,
  condition,
  feelsLike,
  humidity,
  wind,
  pressure,
  icon,
}) {
  return (
    <>
      <div>
        <p className="hero-greeting">{greeting}</p>
        <p className="hero-date">{date}</p>
        <p className="hero-location">
          <i className="bi bi-geo-alt-fill"></i> {city}
        </p>

        {/* CARD */}
        <div className="hero-card">
          {/* CARD WEATHER */}
          <div className="hero-main">
            <div className="hero-icon-wrap">
              <span className="hero-icon">{icon}</span>
            </div>
            <div>
              <span className="hero-temp">{temperature}°C</span>
              <p className="hero-condition">{condition}</p>
              <p className="hero-feelslike">Percepita {feelsLike}°</p>
            </div>
          </div>

          {/* CARD DETAILS */}
          <ul className="hero-details">
            <li className="details-item">
              <i className="bi bi-droplet-fill"></i>
              <div className="details-text">
                <p className="fw-bold"> {humidity}%</p>
                <small>Umidità</small>
              </div>
            </li>
            <li className="details-item">
              <i className="bi bi-wind"></i>
              <div className="details-text">
                <p className="fw-bold"> {wind} km/h</p>
                <small>Vento</small>
              </div>
            </li>
            <li className="details-item">
              <i className="bi bi-speedometer2"></i>
              <div className="details-text">
                <p className="fw-bold"> {pressure} hPa</p>
                <small>Pressione</small>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

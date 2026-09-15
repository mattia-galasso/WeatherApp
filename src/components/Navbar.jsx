import { Link, NavLink } from "react-router";
import "../assets/css/navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-bg">
        <div className="container-fluid">
          <Link
            className="navbar-brand d-flex justify-content-center align-items-center gap-3"
            to="/"
          >
            <img
              src="/img/favicon.png"
              alt="Logo"
              className="d-inline-block align-text-top navbar-logo"
            />
            <span className="navbar-title fw-semibold">WeatherApp</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav fw-semibold fs-5">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" end>
                  <i className="bi bi-house-door pe-2"></i> Dashboard
                </NavLink>
              </li>
              <li className="nav-item middle-item">
                <NavLink className="nav-link" to="/settings">
                  <i className="bi bi-gear pe-2"></i> Impostazioni
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

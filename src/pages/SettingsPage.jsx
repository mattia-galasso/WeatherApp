import { Link } from "react-router";
import "../assets/css/settings.css";

export default function SettingsPage() {
  return (
    <>
      <div className="settings-page">
        <div className="settings-heading">
          <i className="bi bi-gear-fill settings-heading-icon"></i>
          <h1>Impostazioni</h1>
          <p>Gestisci le preferenze dell'applicazione</p>
        </div>

        <div className="settings-card">
          <Link to="/" className="settings-back">
            <i className="bi bi-arrow-left"></i> Torna alla Dashboard
          </Link>

          <hr className="settings-divider" />

          <h2 className="settings-section-title">Preferenze</h2>

          <div className="settings-placeholder">
            <i className="bi bi-tools"></i>
            <p>Nessuna preferenza disponibile al momento</p>
          </div>
        </div>
      </div>
    </>
  );
}

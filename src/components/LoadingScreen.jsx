import "../assets/css/loading.css";

export default function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="loading-box">
        <div className="spinner-border text-light" role="status">
          <span className="visually-hidden">Caricamento...</span>
        </div>
        <p className="loading-text">Caricamento previsioni…</p>
      </div>
    </div>
  );
}
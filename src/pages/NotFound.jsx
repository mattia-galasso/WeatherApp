// pages/NotFound.jsx
import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="container py-5 text-center">
      <h1 className="display-4 fw-bold">404</h1>
      <p className="mb-4">La pagina che cerchi non esiste.</p>
      <Link to="/" className="btn btn-primary">
        <i className="bi bi-arrow-left pe-2"></i>Torna alla Dashboard
      </Link>
    </div>
  );
}
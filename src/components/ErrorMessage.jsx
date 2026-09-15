export default function ErrorMessage({ message, onRetry }) {
  return (
    <div className="container py-5">
      <div className="alert alert-danger d-flex align-items-center gap-3" role="alert">
        <i className="bi bi-exclamation-triangle-fill fs-4"></i>
        <div className="flex-grow-1">
          <h4 className="alert-heading fs-6 mb-1">Qualcosa è andato storto</h4>
          <p className="mb-0">{message}</p>
        </div>
      </div>
    </div>
  );
}
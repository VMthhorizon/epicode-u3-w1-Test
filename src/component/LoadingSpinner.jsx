import { Spinner } from "react-bootstrap";

const LoadingSpinner = function () {
  return (
    <div className="d-flex align-items-center gap-2">
      <Spinner animation="border" variant="light" />
      <span className="text-light fs-2">LOADING...</span>;
    </div>
  );
};

export default LoadingSpinner;

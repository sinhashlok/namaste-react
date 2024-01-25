import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div>
      <h1>404 Not Found</h1>
      <h4>Error Message: {err.statusText}</h4>
      <h4>Status: {err.status}, {err.statusText}</h4>
    </div>
  );
};

export default Error;

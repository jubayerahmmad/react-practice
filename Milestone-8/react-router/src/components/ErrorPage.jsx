import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>Oopss!</h1>
      {/* <p>404 error not Found</p> */}
      <p>
        {error.status}
        {error.statusText}
      </p>
      <p>{error.error.message}</p>
      <Link to="/">
        <button className="border p-2 rounded-lg bg-slate-100">Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;

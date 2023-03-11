import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <h1>Opps !</h1>
      <h1>Something Went wrong</h1>
      <h1>
        Error code {err.status} {err.statusText}
      </h1>
    </>
  );
};

export default Error;

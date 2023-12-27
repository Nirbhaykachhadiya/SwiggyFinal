import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const Err = useRouteError();

  return (
    <>
      <div>{Err.data}</div>
      <div>{Err.status}</div>
      <div>Page {Err.statusText}</div>
    </>
  );
};

export default Error;

import React, { Fragment } from "react";
import load from "./5.gif";
const loading = () => (
  <Fragment>
    <img
      src={load}
      alt="loading..."
      style={{ width: "500px", height:"300px", margin: "auto", display: "block" }}
    />
  </Fragment>
);
export default loading;

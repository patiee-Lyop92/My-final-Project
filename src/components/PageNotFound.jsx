import React from "react";
import { Link } from "react-router-dom";
function PageNotFound() {
  return (
    <div className="pagenotfound">
      <h1>404!!</h1>
      <h2> PAGE NOT FOUND</h2>
      <Link to="/" className="button">
        Go back home
      </Link>
    </div>
  );
}

export default PageNotFound;

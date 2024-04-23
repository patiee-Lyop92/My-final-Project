import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="home">
      {" "}
      <h2>
        Explore My Projects!
        <br />
        Click the button to see all projects
      </h2>
      <Link to="/repos" className="button">
        Explore
      </Link>
    </div>
  );
}

export default Home;

import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a classname="navbar-brand" href="/">Google Book Search</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/" className={window.location.pathname === "/" || window.location.pathname === "/about" ? "nav-link active" : "nav-link"}>
              &nbsp;&nbsp;&nbsp;Home
              </Link>
          </li>
          <li className="nav-item">
            <Link to="/view" className={window.location.pathname === "/view" ? "nav-link active" : "nav-link"}>
              View
              </Link>
          </li>
          <li className="nav-item">
            <Link to="/search" className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}>
              Search
              </Link>
          </li>
        </ul>
        <span className="navbar-text">

        </span>
      </div>
    </nav>
  );
}

export default Nav;

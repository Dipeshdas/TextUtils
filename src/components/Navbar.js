import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/about">{props.About}</Link>
            </li> */}
          </ul>
          <div style={{ backgroundColor: "orange", borderRadius: "8px" }}>
            <button
              type="button"
              onClick={() => {
                props.toggleMode2("primary");
              }}
              className="btn btn-primary mx-2 mb-1"
            ></button>
            <button
              type="button"
              onClick={() => {
                props.toggleMode2("secondary");
              }}
              className="btn btn-secondary mx-2 mb-1"
            ></button>
            <button
              type="button"
              onClick={() => {
                props.toggleMode2("success");
              }}
              className="btn btn-success mx-2 mb-1"
            ></button>
            <button
              type="button"
              onClick={() => {
                props.toggleMode2("danger");
              }}
              className="btn btn-danger mx-2 mb-1"
            ></button>
            <button
              type="button"
              onClick={() => {
                props.toggleMode2("warning");
              }}
              className="btn btn-warning mx-2 mb-1"
            ></button>
            <button
              type="button"
              onClick={() => {
                props.toggleMode2("info");
              }}
              className="btn btn-info mx-2 mb-1"
            ></button>
            <button
              type="button"
              onClick={() => {
                props.toggleMode2("light");
              }}
              className="btn btn-light mx-2 mb-1"
            ></button>
            <button
              type="button"
              onClick={() => {
                props.toggleMode2("dark");
              }}
              className="btn btn-dark mx-2 mb-1"
            ></button>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  About: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Set title here",
  About: "About text here",
};

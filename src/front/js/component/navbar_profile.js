import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar_top">
      <div className="container container-fluid ">
        <div className="d-flex">
          <Link to="/">
            <img
              className="img-fluid logo"
              src="https://i.postimg.cc/q77XXd3d/Young-Star-removebg-preview-adobe-express.png"
              alt="click_logo"
            />
          </Link>
        </div>

        <div className="d-flex">
          <input
            className="buscador form-control me-2"
            type="search"
            placeholder=" Buscador"
            aria-label="Search"
          ></input>
          <button className="btn btn-primary mx-1">
            <i className="fas fa-search me-2 pt-2"></i>
          </button>
        </div>

        <div className="d-flex flex-row-reverse">
          <Link to="/">
            <button className="btn btn-primary mx-1">Logout</button>
          </Link>

          {/* <Link to="/Profile">
            <button className="btn btn-primary mx-1">Perfil</button>
          </Link> */}
          {/* <button className="btn btn-secondary mx-1">Logout</button> */}
        </div>
      </div>
    </nav>
  );
};

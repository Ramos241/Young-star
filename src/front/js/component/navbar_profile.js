import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"

import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  let navigate = useNavigate()

  useEffect(() => { { actions.getUserInfo() } }, [])

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
        <div className="d-flex flex-row-reverse">
          <Link to="/">
            <button type="button" onClick={() => actions.userLogout()} className="btn btn-primary mx-1">Logout</button>
          </Link>

          <Link to="/Profile">
            <button className="btn btn-primary mx-1">Perfil</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

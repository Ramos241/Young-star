import React from "react";
import { Link } from "react-router-dom";

export const Navbar_profile = () => {
	return (
		<><nav className="navbar navbar-expand-lg navbar-dark navbar-sections">
        <div className="container container-fluid">
        <ul className=" navbar-nav mb-2 mb-lg-0">
    <li className="nav-item mr-5">
      <a className="nav-link active" aria-current="page" href="#"><i class="fas fa-house-user me-1"></i>Home</a>
    </li>
    <li className="nav-item mr-5">
      <a className="nav-link active" aria-current="page" href="#"><i class="fas fa-play m-1"></i>Videos</a>
    </li>
    <li className="nav-item mr-5">
      <a className="nav-link active" aria-current="page" href="#"><i class="fas fa-chart-bar m-1"></i>Stats</a>
    </li>
    <li className="nav-item mr-5">
      <a className="nav-link active" aria-current="page" href="#"><i class="fas fa-book m-1"></i>Info</a>
    </li>
    <li className="nav-item mr-5">
      <a className="nav-link active" aria-current="page" href="#"><i class="far fa-id-card m-1"></i>Contact</a>
    </li>
        </ul>
    </div>
    </nav>
    </>
	);
};
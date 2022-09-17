import React from "react";
import { Link } from "react-router-dom";
import { Buscador } from "./navbar_home";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar_top">
			<div className="container container-fluid ">
				<div className="d-flex">
					<Link to="/"><img className="img-fluid logo" src="https://i.postimg.cc/q77XXd3d/Young-Star-removebg-preview-adobe-express.png" alt="click_logo"/>
					</Link>
				</div>
				<div className="d-flex flex-row-reverse">
					<Link to="/signup">
						<button className="btn btn-primary mx-1">Signup</button>
					</Link>
					<Link to="/login">
						<button className="btn btn-primary mx-1">Login</button>
					</Link>
					{/* <button className="btn btn-secondary mx-1">Logout</button> */}
				</div>
			</div>
		</nav>
	);
};

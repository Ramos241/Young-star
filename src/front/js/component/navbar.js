import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<div className="d-flex w-auto">
					<Link to="/">
						<span className="navbar-brand mb-0 h1">Home</span>
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

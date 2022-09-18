import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

import { useNavigate } from "react-router-dom";
import "../../styles/login.css";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate()

	let initialState = {
		email: "",
		password: "",
	}

	let [userData, setUserData] = useState(initialState)

	let handleChange = ({ target }) => {
		setUserData({
			...userData,
			[target.name]: target.value,
		})
	};

	let handleSubmit = async (event) => {
		event.preventDefault()
		if (actions.loginValidityChecker(userData)) {
			if (await actions.loginUser(userData)) {
				navigate("/profile")
			}
		}
	}

	return (

		<>
			<form className="formulario" onSubmit={handleSubmit}>
				<h1>Iniciar Seccion</h1>
				<div className="container">
					<div className="imput-contenedor mb-3 d-flex">
						<i className="fa-solid fa-envelope icon"></i>
						<input
							type="email"
							name="email"
							onChange={handleChange}
							className="form-control input-fitter"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
						/>
					</div>
					<div className="imput-contenedor mb-3 d-flex">
						<i className="fa-solid fa-key icon"></i>
						<input
							type="password"
							name="password"
							onChange={handleChange}
							className="form-control"
							id="exampleInputPassword1"
						/>
					</div>
					<button type="submit" className="button btn-primary my-2">Entrar</button>
				</div>
			</form>
		</>
	);
};
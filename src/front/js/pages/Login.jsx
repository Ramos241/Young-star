import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/login.css";
import { useNavigate } from "react-router-dom";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate()

	const [userData, setUserData] = useState(initialState)

	let initialState = {
		email: "",
		password: "",
	}

	let handleSubmit = async (event) => {
		event.preventDefault()
		if (actions.loginValidityChecker(userData)) {
			if (await actions.userLogin(userData)) {
				navigate("/")
			}
		}
	}

	let handleChange = ({ target }) => {
		setUserData({
			...userData,
			[target.name]: target.value,
		})
	};

	return (
		<form className="formulario" onSubmit={handleSubmit}>
			<h1>Inicia Seccion</h1>
			<div className="container">
				<div className="imput-contenedor mb-3 d-flex">
					<i className="fa-solid fa-envelope icon"></i>
					<input
						placeholder="Email"
						type="text"
						name="email"
						onChange={handleChange}
						id="email"
						aria-describedby="emailHelp"
						className="form-control"
					/>
				</div>
				<div className="imput-contenedor mb-3 d-flex">
					<i className="fa-solid fa-key icon"></i>
					<input
						placeholder="Password"
						type="password"
						name="password"
						onChange={handleChange}
						id="password"
						className="form-control"
					/>
				</div>
				<button type="submit" className="button btn-primary my-2">Entrar</button>
			</div>
		</form>
	);
};
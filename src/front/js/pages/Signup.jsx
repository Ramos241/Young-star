import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/signup.css";

import { useNavigate } from "react-router-dom";

import { Navbar } from "../component/navbar";



export const Signup = () => {
	const { actions } = useContext(Context);
	const navigate = useNavigate()

	const [userData, setUserData] = useState(initialState)
	let initialState = {
		email: "",
		username: "",
		password: "",
	}

	let handleSubmit = async (event) => {
		event.preventDefault()
		if (actions.signupValidityChecker(userData)) {
			await actions.userSignup(userData)
			navigate("/login")

		} else {
			alert("CAMPOS INVALIDOS")
		}
	}

	let handleChange = ({ target }) => {
		setUserData({
			...userData,
			[target.name]: target.value,
		})
	};

	return (
		<><Navbar />
		<div className="img-fondo">
			<form className="formulario" onSubmit={handleSubmit}>
				<h1>Registrate</h1>
				<div className="container">
					<div className="imput-contenedor mb-3 d-flex">
						<i className="fa-solid fa-envelope icon"></i>
						<input
							placeholder="Email"
							type="text"
							name="email"
							onChange={handleChange}
							className="form-control"
							id="email"
							aria-describedby="emailHelp"
						/>
					</div>

					<div className="imput-contenedor mb-3 d-flex">
						<i className="fa-solid fa-user icon"></i>
						<input
							placeholder="Nombre"
							type="text"
							name="username"
							onChange={handleChange}
							className="form-control"
							id="username"
						/>
					</div>

					<div className="imput-contenedor mb-3 d-flex">
						<i className="fa-solid fa-key icon"></i>
						<input
							placeholder="Password"
							type="password"
							name="password"
							onChange={handleChange}
							className="form-control"
							id="password"
						/>
					</div>
					<div className="Titulo mt-3">
						<p>Su clave debe contener 8 caracteres o mas, para mayor seguridad..</p>
					</div>
					<button type="submit" className="button btn-primary my-2">Registrar</button>
					<p className="politicas">
						Al registrarte, aceptas nuestras Politicas de privacidad y Condiciones de uso.
					</p>
				</div>
			</form>
		</div>
		</>
	);
};

export default Signup;

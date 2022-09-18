import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { Context } from "../store/appContext";
import "../../styles/signup.css";

export const Signup = () => {
	let navigate = useNavigate()
	const { store, actions } = useContext(Context);

	const [userData, setUserData] = useState({
		username: "", email: "", password: ""
	});

	const handleChange = (event) => {
		setUserData({
			...userData,
			[event.target.name]: event.target.value
		})
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

	return (
		<div className="img-fondo">
			<form className="formulario" onSubmit={handleSubmit} action="login.php">
				<h1>Registrate</h1>
				<div className="container">
					<div className="imput-contenedor mb-3 d-flex">
						<i className="fa-solid fa-envelope icon"></i>
						<input
							className="form-control"
							placeholder="Email"
							type="text"
							name="email"
							value={userData.email}
							onChange={handleChange}
						/>
					</div>

					<div className="imput-contenedor mb-3 d-flex">
						<i className="fa-solid fa-user icon"></i>
						<input
							className="form-control"
							placeholder="Nombre de usuario"
							type="text"
							name="username"
							value={userData.username}
							onChange={handleChange}
						/>
					</div>

					<div className="imput-contenedor mb-3 d-flex">
						<i className="fa-solid fa-key icon"></i>
						<input
							className="form-control"
							placeholder="Contraseña"
							type="password"
							name="password"
							value={userData.password}
							onChange={handleChange}
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
	);
};

export default Signup;

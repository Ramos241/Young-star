import React from 'react'
import { Link } from "react-router-dom"

export const Navbar_galeria = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <div className="navbar-nav ms-auto">
                    <Link className="icono_profile nav-link" to="/profile"><i class="fa-solid fa-user"></i></Link>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <div className="navbar-nav ms-auto">
                            <Link className="subir_imagen nav-link" to="/upload_imagen">Subir Imagen</Link>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    )
};
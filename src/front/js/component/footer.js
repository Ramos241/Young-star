import React, { Component } from "react";

export const Footer = () => (
	<footer className="footer">
	<div className="container-fluid">
            <div className="row">
			<p style={{textAlign: "center",marginTop: "10px"}}>&copy; {(new Date().getFullYear())} Young-star, Inc. &middot; <a href="#">Política de Privacidad</a> &middot; <a href="#">Condiciones de uso</a></p>
        </div>
        </div>
	</footer>
);

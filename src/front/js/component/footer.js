import React, { Component } from "react";

export const Footer = () => (
	<footer className="container">
		<p className="float-right"></p>
		<p>&copy; {(new Date().getFullYear())} Yount-star, Inc. &middot; <a href="#">Política de Privacidad</a> &middot; <a href="#">Comdiciones de uso</a></p>
	</footer>
);

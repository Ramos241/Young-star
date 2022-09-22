import React, { useContext, useState } from "react";
import "../../styles/profile.css";
import { Navbar } from "../component/navbar_profile";

export const Profile = () => {
    return (
        <>
            <Navbar />
            <nav className="navbar navbar-expand-lg navbar-dark navbar-sections">
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
    <p class="fs-3 p-2 followers">30 Followers</p>

        <div><img src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2018/02/23/15193541612182.jpg" className="photo-profile rounded-circle" alt="..."></img></div>
        {/* <div><iframe className="principal-video"
                    width="598"
                    height="400"
                    src="https://www.youtube.com/embed/k55JCIS1UOM"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; 1; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe></div>
        <div>
          <iframe className="second-video"
                    width="300"
                    height="180"
                    src="https://www.youtube.com/embed/k55JCIS1UOM"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; 1; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
          <iframe className="third-video"
                    width="300"
                    height="180"
                    src="https://www.youtube.com/embed/k55JCIS1UOM"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; 1; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
                </div> */}
        <div className="ficha-perfil">
          <h1><strong style={{color: "white"}}>Jose Perez</strong></h1>
          <p className="p-2" style={{color: "white"}}>Joven pitcher de 19 años, Cararacas-Venezuela, Joven pitcher de 19 años, Cararacas-VenezuelaJoven pitcher de 19 años, Cararacas-VenezuelaJoven pitcher de 19 años, Cararacas-Venezuela</p>
          <p className="p-2" style={{color: "white"}}>Position: Pitcher</p>
          <p className="p-2" style={{color: "white"}}>Height: 6,23ft</p>
          <p className="p-2" style={{color: "white"}}>Weight: 240.3lb</p>
          <p className="p-2" style={{color: "white"}}>Throwing arm: Left</p>
          <p className="p-2" style={{color: "white"}}>batting side: Left</p>
          <p className="p-2" style={{color: "white"}}>Club: San Diego Padres Academy</p>
        </div>
        </>
    );
}
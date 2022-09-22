import React from "react";
import { Link } from "react-router-dom";

export const Profile_card = () => {
	return (
		<><div>
            <img src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2018/02/23/15193541612182.jpg" className="photo-profile rounded-circle" alt="..."></img>
        </div><div className="ficha-perfil">
                <h1><strong style={{ color: "white" }}>Jose Perez</strong></h1>
                <p className="p-2" style={{ color: "white" }}>Joven pitcher de 19 años, Cararacas-Venezuela, Joven pitcher de 19 años, Cararacas-VenezuelaJoven pitcher de 19 años, Cararacas-VenezuelaJoven pitcher de 19 años, Cararacas-Venezuela</p>
                <p className="p-2" style={{ color: "white" }}>Position: Pitcher</p>
                <p className="p-2" style={{ color: "white" }}>Height: 6,23ft</p>
                <p className="p-2" style={{ color: "white" }}>Weight: 240.3lb</p>
                <p className="p-2" style={{ color: "white" }}>Throwing arm: Left</p>
                <p className="p-2" style={{ color: "white" }}>batting side: Left</p>
                <p className="p-2" style={{ color: "white" }}>Club: San Diego Padres Academy</p>
            </div></>
	);
};
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Profile_card = () => {
    return (
        <>
            <div className="ficha-perfil m-3">
                <h1><strong style={{ color: "white" }}>Jose Perez</strong></h1>
                <p className="p-2" style={{ color: "white" }}>Joven pitcher de 19 años, Cararacas-Venezuela, Joven pitcher de 19 años, Cararacas-VenezuelaJoven pitcher de 19 años, Cararacas-VenezuelaJoven pitcher de 19 años, Cararacas-Venezuela</p>
                <p className="p-2" style={{ color: "white" }}>Position: Pitcher</p>
                <p className="p-2" style={{ color: "white" }}>Height: 6,23ft</p>
                <p className="p-2" style={{ color: "white" }}>Weight: 240.3lb</p>
                <p className="p-2" style={{ color: "white" }}>Throwing arm: Left</p>
                <p className="p-2" style={{ color: "white" }}>batting side: Left</p>
                <p className="p-2" style={{ color: "white" }}>Nationality: Ccs-Venezuela</p>
                <p className="p-2" style={{ color: "white" }}>Club: San Diego Padres Academy</p>
            </div>
        </>
    )
}


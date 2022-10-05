import React, { useState, useEffect, useContext } from "react";

export const Profile_card = () => {
  return (
    <>
      <div className="card-profile">
        <div>
          <img
            src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2018/02/23/15193541612182.jpg"
            className="photo-profile rounded-circle"
            alt="..."
          ></img>
        </div>
        <div className="small-profile">
        <div className="d-flex justify-content-center pt-1">
            <p className="fs-2 fw-bold">Jose Perez</p>
          </div>
          <div>
            <p>Tercera base #32</p>
          </div>
          <table className="table">
            <tbody>
              <tr>
                <td>EST/PES</td>
                <th className="fs-6">2.01 m, 127 kg</th>
              </tr>
              <tr>
                <td>FDN</td>
                <th className="fs-6">17/1/2001 (21)</th>
              </tr>
              <tr>
                <td>BAT/THR</td>
                <th className="fs-6">Derecha/Derecha</th>
              </tr>
              <tr>
                <td>NACIDO EN</td>
                <th className="fs-6">Ccs-Venezuela</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

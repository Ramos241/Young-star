import React, { useContext, useState } from "react";
import "../../styles/profile.css";
import { Navbar } from "../component/navbar_profile";

export const Profile = () => {
    return (
        <>
            <Navbar />
            <nav class="navbar navbar-expand-lg navbar-profile">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Overview</a>
        <a class="nav-link" href="#">Videos</a>
        <a class="nav-link" href="#">Saves</a>
      </div>
    </div>
  </div>
</nav>
            <div className="container-fluid m-3">
                <div className="row">
                    <div className="col px-0 ml-1">
                        <img src="https://picsum.photos/id/104/445/180" />
                    </div>
                    <div className="col px-0">
                        <img src="https://picsum.photos/id/1041/445/180" />
                    </div>
                    <div className="col px-0">
                        <img src="https://picsum.photos/id/1025/445/180" />
                    </div>
                </div>
            </div>

            <div className="container-fluid seg-ter m-3">
                <div className="row">
                    <div className="col px-0 ml-1">
                        <img src="https://picsum.photos/id/1043/445/180" />
                    </div>
                    <div className="col px-0">
                        <img src="https://picsum.photos/id/1028/445/180" />
                    </div>
                    <div className="col px-0">
                        <img src="https://picsum.photos/id/1078/445/180" />
                    </div>
                </div>
            </div>
            <div className="container-fluid seg-ter m-3">
                <div className="row">
                    <div className="col px-0 ml-1">
                        <img src="https://picsum.photos/id/1069/445/180" />
                    </div>
                    <div className="col px-0">
                        <img src="https://picsum.photos/id/1012/445/180" />
                    </div>
                    <div className="col px-0">
                        <img src="https://picsum.photos/id/157/445/180" />
                    </div>
                </div>
            </div>
        </>
    );
}
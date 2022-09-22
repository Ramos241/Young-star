import React, { useContext, useState } from "react";
import "../../styles/profile.css";
import { Navbar } from "../component/navbar_profile";
import { Profile_card } from "../component/profile_card.js";
import { Navbar_profile } from "../component/profile-sections.js";

export const Profile = () => {
    return (
        <>
            <Navbar />
            <Navbar_profile />
            <Profile_card />
    <p class="fs-3 p-2 followers">30 Followers</p>

        {/* <div><img src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2018/02/23/15193541612182.jpg" className="photo-profile rounded-circle" alt="..."></img></div> */}
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
        
        </>
    );
}
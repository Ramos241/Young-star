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
        </>
    );
}
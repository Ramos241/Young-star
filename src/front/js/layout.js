import React from "react";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/Home.jsx";
import { Signup } from "./pages/Signup.jsx";
import { Login } from "./pages/Login.jsx";
import { Profile } from "./pages/Profile.jsx";
import { Galeria } from "./pages/Galeria.jsx";
import { Upload_imagen } from "./component/Upload_imagen.jsx";
import injectContext from "./store/appContext";
import { Footer } from "./component/footer";


//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Signup />} path="/signup" />
            <Route element={<Login />} path="/login" />
            <Route element={<Profile />} path="/Profile" />
            <Route element={<Galeria />} path="/Galeria" />
            <Route element={<Upload_imagen />} path="/Upload_imagen" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          {/* <Footer /> */}
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);

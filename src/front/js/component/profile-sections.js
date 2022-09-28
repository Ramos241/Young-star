import React from "react";
import { Profile_card } from "./profile_card";

export const Navbar_profile = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-sections">
        <div className="container container-fluid">
          <ul className=" nav nav-tabs mb-2 mb-lg-0">
            <li className="nav-item mr-5">
              <a
                className="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home"
                type="button"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                <i class="fas fa-house-user me-1"></i>Home
              </a>
            </li>
            <li className="nav-item mr-5">
              <a
                className="nav-link"
                id="videos-tab"
                data-bs-toggle="tab"
                data-bs-target="#videos"
                type="button"
                role="tab"
                aria-controls="videos"
                aria-selected="false"
              >
                <i class="fas fa-play m-1"></i>Videos
              </a>
            </li>

            <li className="nav-item mr-5">
              <a
                className="nav-link"
                id="stats-tab"
                data-bs-toggle="tab"
                data-bs-target="#stats"
                type="button"
                role="tab"
                aria-controls="stats"
                aria-selected="false"
              >
                <i class="fas fa-chart-bar m-1"></i>Stats
              </a>
            </li>
            <li className="nav-item mr-5">
              <a
                className="nav-link"
                id="info-tab"
                data-bs-toggle="tab"
                data-bs-target="#info"
                type="button"
                role="tab"
                aria-controls="info"
                aria-selected="false"
              >
                <i class="fas fa-book m-1"></i>Info
              </a>
            </li>
            <li className="nav-item mr-5">
              <a
                className="nav-link"
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#contact"
                type="button"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                <i class="far fa-id-card m-1"></i>Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>{" "}

      {/* <!-- Tab panes --> */}

      <div className="tab-content d-flex">
        <Profile_card />
        <div
          className="tab-pane active my-5"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <iframe
            className="principal-video mt-3"
            width="600"
            height="400"
            src="https://www.youtube.com/embed/Cugoojjri8U"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
            className="second-video"
            width="300"
            height="200"
            src="https://www.youtube.com/embed/Cugoojjri8U"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
            className="third-video"
            width="300"
            height="200"
            src="https://www.youtube.com/embed/Cugoojjri8U"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div
          className="tab-pane container-fluid"
          id="videos"
          role="tabpanel"
          aria-labelledby="videos-tab"
        >
          <div class="row m-2">
            <div class="col">
              <iframe
                className="video m-2"
                width="400"
                height="250"
                src="https://www.youtube.com/embed/Cugoojjri8U"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="col">
              <iframe
                className="video m-2"
                width="400"
                height="250"
                src="https://www.youtube.com/embed/Cugoojjri8U"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="col">
              <iframe
                className="video m-2"
                width="400"
                height="250"
                src="https://www.youtube.com/embed/Cugoojjri8U"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="col">
              <iframe
                className="video m-2"
                width="400"
                height="250"
                src="https://www.youtube.com/embed/Cugoojjri8U"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="col">
              <iframe
                className="video m-2"
                width="400"
                height="250"
                src="https://www.youtube.com/embed/Cugoojjri8U"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="col">
              <iframe
                className="video m-2"
                width="400"
                height="250"
                src="https://www.youtube.com/embed/Cugoojjri8U"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>

        <div
          className="tab-pane"
          id="stats"
          role="tabpanel"
          aria-labelledby="stats-tab"
        >
          <h2 style={{ color: "white" }}>AQUI VAN LAS ESTADISTICAS</h2>
        </div>
        <div
          className="tab-pane"
          id="info"
          role="tabpanel"
          aria-labelledby="info-tab"
        >
          <h2 style={{ color: "white" }}>AQUI VA LA INFO</h2>
        </div>
        <div
          className="tab-pane"
          id="contact"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          <h2 style={{ color: "white" }}>AQUI VA EL CONTACTO</h2>
        </div>
      </div>
    </>
  );
};

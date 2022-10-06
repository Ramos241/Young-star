import React from "react";
import { Profile_card } from "./profile_card";

export const Navbar_profile = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-sections">
        <div className="container container-fluid">
          <ul className=" nav nav-tabs nav-buttons mb-2 mb-lg-0">
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
                <i className="fas fa-house-user me-1"></i>Home
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
                <i className="fas fa-chart-bar m-1"></i>Stats
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
                <i className="fas fa-book m-1"></i>Info
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
                <i className="far fa-id-card m-1"></i>Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>{" "}
      {/* <!-- Tab panes --> */}
      <div className="tab-content d-flex">
        <Profile_card />
        <div
          className="tab-pane active ms-4"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <div className="ficha-perfil d-flex p-1 mb-3 mt-2">
            <div>
              <h2 className="badge bg-dark text-wrap ms-2">Descripción</h2>
              <p className="m-3 lead">
                Joven venezolano, activo, jugador agresivo y con mucho amor al
                deporte y la competencia, en busca de la superación y deseo de
                llegar a las ligas mayores, buena mecanica de bateo, listo para
                recibir ofertas.
              </p>
            </div>
            <div className="small-stats">
              <div className="d-flex justify-content-center pt-1">
                <p className="badge bg-dark text-wrap">
                  ESTADISTICAS TEMPORADA 2022
                </p>
              </div>
              <table className="table">
                <tbody>
                  <tr>
                    <td>AVG</td>
                    <td>HR</td>
                    <td>RBI</td>
                    <td>OPS</td>
                  </tr>
                  <tr>
                    <th className="fs-4">.311</th>
                    <th className="fs-4">62</th>
                    <th className="fs-4">131</th>
                    <th className="fs-4">1.111</th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="container-videos mb-3">
            <div>
              <h2 className="badge bg-dark text-wrap ms-2">Videos</h2>
            </div>
            <iframe
              className="principal-video ms-1"
              width="600"
              height="330"
              src="https://www.youtube.com/embed/Cugoojjri8U"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <iframe
              className="second-video"
              width="250"
              height="150"
              src="https://www.youtube.com/embed/Cugoojjri8U"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <iframe
              className="third-video"
              width="250"
              height="150"
              src="https://www.youtube.com/embed/Cugoojjri8U"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="container stats-table mb-2">
            <div>
              <p className="badge bg-dark text-wrap">Bateando 2022</p>
              <button type="button" className="btn btn-link">
                Ver todo
              </button>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">ESTADISTICAS</th>
                  <th scope="col">J</th>
                  <th scope="col">AB</th>
                  <th scope="col">R</th>
                  <th scope="col">H</th>
                  <th scope="col">2B</th>
                  <th scope="col">3B</th>
                  <th scope="col">HR</th>
                  <th scope="col">RBI</th>
                  <th scope="col">BB</th>
                  <th scope="col">K</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Temporada Regular</th>
                  <td>157</td>
                  <td>570</td>
                  <td>133</td>
                  <td>133</td>
                  <td>133</td>
                  <td>133</td>
                  <td>133</td>
                  <td>133</td>
                  <td>133</td>
                  <td>133</td>
                </tr>
                <tr>
                  <th scope="row">Projected</th>
                  <td>157</td>
                  <td>570</td>
                  <td>133</td>
                  <td>133</td>
                  <td>133</td>
                  <td>133</td>
                  <td>133</td>
                  <td>133</td>
                  <td>133</td>
                  <td>133</td>
                </tr>
                <tr>
                  <th scope="row">Carrera</th>
                  <td>157</td>
                  <td>570</td>
                  <td>133</td>
                  <td>133</td>
                  <td>133</td>
                  <td>133</td>
                  <td>133</td>
                  <td>133</td>
                  <td>133</td>
                  <td>133</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div
          className="tab-pane ms-4"
          id="stats"
          role="tabpanel"
          aria-labelledby="stats-tab"
        >
          <div className="cuadro-estadisticas mt-2 mb-2">
            <div>
              <p className="badge bg-dark text-wrap m-2">Estadisticas</p>
            </div>
            <div>
              <p className="text-start fw-bold fs-3 m-1 mb-4">Bateo-Carrera</p>
            </div>
            <div className="d-flex m-1">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Temporada</th>
                    <th scope="col">Equipo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2016</td>
                    <td>NYY</td>
                  </tr>
                  <tr>
                    <td>2017</td>
                    <td>NYY</td>
                  </tr>
                  <tr>
                    <td>2018</td>
                    <td>NYY</td>
                  </tr>
                  <tr>
                    <td>2019</td>
                    <td>NYY</td>
                  </tr>
                  <tr>
                    <td>2020</td>
                    <td>NYY</td>
                  </tr>
                  <tr>
                    <td>2021</td>
                    <td>NYY</td>
                  </tr>
                  <tr>
                    <th className="letras" scope="col">
                      Carrera
                    </th>
                  </tr>
                  <tr>
                    <th className="letras" scope="col">
                      Promedios de Temporada
                    </th>
                  </tr>
                </tbody>
              </table>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">J</th>
                    <th scope="col">AB</th>
                    <th scope="col">R</th>
                    <th scope="col">H</th>
                    <th scope="col">2B</th>
                    <th scope="col">3B</th>
                    <th scope="col">HR</th>
                    <th scope="col">RBI</th>
                    <th scope="col">BB</th>
                    <th scope="col">HBP</th>
                    <th scope="col">K</th>
                    <th scope="col">SB</th>
                    <th scope="col">CS</th>
                    <th scope="col">AVG</th>
                    <th scope="col">OBP</th>
                    <th scope="col">SLG</th>
                    <th scope="col">OPS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <p className="badge bg-dark text-wrap ms-2">Glosario</p>
            </div>
            <div>
              <table class="table table-borderless">
                <thead>
                  <tr>
                    <th>J:Partidos jugados</th>
                    <th>AB:Al Bat</th>
                    <th>R:Carreras</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>H:Aciertos</th>
                    <th>2B:Dobles</th>
                    <th>3B:Triples</th>
                  </tr>
                  <tr>
                    <th>BB:Bases por bolas</th>
                    <th>HR:Cuadrangulares</th>
                    <th>RBI:Empujadas</th>
                  </tr>
                  <tr>
                    <th>HBP:Golpeado por Lanzamiento</th>
                    <th>K:Ponches</th>
                    <th>SB:Bases robadas</th>
                  </tr>
                  <tr>
                    <th>CS:Atrapado en intento de robo</th>
                    <th>AVG:Promedio de Bateo</th>
                    <th>SLG:Porcentaje de slugging</th>
                  </tr>
                  <tr>
                    <th>OPS:OPS = OBP + SLG</th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div
          className="tab-pane ms-4"
          id="info"
          role="tabpanel"
          aria-labelledby="info-tab"
        >
          <div className="info-container m-2">
            <div>
              <p className="badge bg-dark text-wrap ms-2">Info</p>
            </div>
            <div className="d-flex">
              <p className="text-left ms-2 w-70">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy <br></br>
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <img
                className="imagen-info m-4"
                src="https://reglamentos-deportes.com/wp-content/uploads/2010/01/512px-Baseball_swing.jpg"
                alt="..."
              ></img>
            </div>
          </div>
        </div>
        <div
          className="tab-pane ms-4"
          id="contact"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          <div className="info-container m-2">
            <div>
              <p className="badge bg-dark text-wrap ms-2">Contacto</p>
            </div>
            <p>
              <i class="fas fa-envelope m-1"></i>carlosgomz1331@gmail.com
            </p>
            <p>
              <i class="fab fa-whatsapp m-1"></i>+58 4263022014
            </p>
            <p>
              <i class="fab fa-telegram-plane m-1"></i>+58 4263022014
            </p>
            <p>
              <i class="fab fa-instagram m-1"></i>@carlossgomz
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

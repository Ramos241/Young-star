import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Navbar } from "../component/navbar_home"

export const Home = () => {
    const { store, actions } = useContext(Context);
    return (
        <>
            <Navbar />
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="..." class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="..." class="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>
            {/* Video 1 */}
            <div className="card">
                <div className="card-header">
                    <img
                        src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2018/02/23/15193541612182.jpg"
                        className="profile-photo border border border-dark rounded-circle float-start"
                        alt="..."
                    ></img>
                    <h4 className="titulo float-start p-2">Jose Perez (2025)</h4>
                    <p className="float-end">15/09</p>
                </div>
                <iframe
                    width="598"
                    height="400"
                    src="https://www.youtube.com/embed/k55JCIS1UOM"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; 1; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
                <div className="card-body">
                    <h5 className="card-title">23 Likes</h5>
                    <p className="card-text">Descripcion*</p>
                    <button type="button" className="btn btn-light btn-sm">
                        <i className="far fa-heart"></i>
                    </button>
                </div>
            </div>
            {/* Video 2 */}
            <div className="card">
                <div className="card-header">
                    <img
                        src="https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/04/24001532/AlexVerdugo2.jpg"
                        className="profile-photo border border border-dark rounded-circle float-start"
                        alt="..."
                    ></img>
                    <h4 className="titulo float-start p-2">Andres Gonzales (2024)</h4>
                    <p className="float-end">03/09</p>
                </div>
                <iframe
                    width="598"
                    height="400"
                    src="https://www.youtube.com/embed/2EbG2-UdQS8"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; 1; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
                <div className="card-body">
                    <h5 className="card-title">6 Likes</h5>
                    <p className="card-text">Descripcion*</p>
                    <button type="button" className="btn btn-light btn-sm">
                        <i className="far fa-heart"></i>
                    </button>
                </div>
            </div>
            {/* Video 3 */}
            <div className="card">
                <div className="card-header">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPQex0DAKWpPpXYc86iWUhStiQnAKnJ_JfHRWFlELx6--JvaoIIu2pnKgNig_H9eBSBno&usqp=CAU"
                        className="profile-photo border border border-dark rounded-circle float-start"
                        alt="..."
                    ></img>
                    <h4 className="titulo float-start p-2">Carlos Gomez (2023)</h4>
                    <p className="float-end">01/09</p>
                </div>
                <iframe
                    width="598"
                    height="400"
                    src="https://www.youtube.com/embed/HtrHCnKuSTw"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; 1; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
                <div className="card-body">
                    <h5 className="card-title">45 Likes</h5>
                    <p className="card-text">Descripcion*</p>
                    <button type="button" className="btn btn-light btn-sm">
                        <i className="far fa-heart"></i>
                    </button>
                </div>
            </div>
            {/* Video 4 */}
            <div className="card">
                <div className="card-header">
                    <img
                        src="https://www.albat.com/__export/1637278573808/sites/debate/img/2021/11/18/bryce_harper_x5x.jpg_976912859.jpg"
                        className="profile-photo border border border-dark rounded-circle float-start"
                        alt="..."
                    ></img>
                    <h4 className="titulo float-start p-2">Juan Diego Gerig (2020)</h4>
                    <p className="float-end">03/09</p>
                </div>
                <iframe
                    width="598"
                    height="400"
                    src="https://www.youtube.com/embed/skU1ky8ZYg8"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; 1; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
                <div className="card-body">
                    <h5 className="card-title">6 Likes</h5>
                    <p className="card-text">Descripcion*</p>
                    <button type="button" className="btn btn-light btn-sm">
                        <i className="far fa-heart"></i>
                    </button>
                </div>
            </div>
            {/* Video 5 */}
            <div className="card">
                <div className="card-header">
                    <img
                        src="https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/04/24001532/AlexVerdugo2.jpg"
                        className="profile-photo border border border-dark rounded-circle float-start"
                        alt="..."
                    ></img>
                    <h4 className="titulo float-start p-2">Gabriel Ramos (2022)</h4>
                    <p className="float-end">14/08</p>
                </div>
                <iframe
                    width="598"
                    height="400"
                    src="https://www.youtube.com/embed/D_3BwlnZgFo?"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
                <div className="card-body">
                    <h5 className="card-title">50 Likes</h5>
                    <p className="card-text">Descripcion*</p>
                    <button type="button" className="btn btn-light btn-sm">
                        <i className="far fa-heart"></i>
                    </button>
                </div>
            </div>
        </>
    );
};
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Profile_card = () => {


    const { store, actions } = useContext(Context);
    const [imageFile, setImageFile] = useState();
    // const [imageName, setImageName] = useState("");
    // const [imageDescripcion, setImageDescripcion] = useState("");


    const handleSubmit = () => {
        const formData = new FormData();
        formData.append("img", imageFile);
        // formData.append("titulo", imageName);
        // formData.append("descripcion", imageDescripcion);
        actions.uploadImg(formData);
    };

    useEffect(() => {
        if (store.post && store.post.length > 0) return;
        actions.getPost();
    }, []);

    return (
        <>
            <div className="justify-content-around my-3 mx-3">
                {store.post && store.post.map((post) => (
                    <div className="d-flex flex-column justify-content-between" key={post.cloudinary_id}>
                        <div className="contenedor-img-perfil">
                            <img
                                src={post.img_url}
                                alt={`post ${post.titulo}`}
                                className="img-perfil"
                            />
                        </div>
                        <button className="boton-eliminar mt-3" onClick={() => actions.deletePost(post.id)}><i class="fa-solid fa-xmark"></i></button>
                    </div>
                ))}
            </div>
            <div className="container-upload mx-3">
                <div className="my-2 d-flex">
                    <button className="boton-subir" onClick={() => handleSubmit()}><i class="fa-solid fa-upload"></i></button>
                    <input
                        className="input-browser my-2 mx-2"
                        type="file"
                        name="file"
                        onChange={(e) => setImageFile(e.target.files[0])}
                        accept=".jpg, .jpeg, .png"
                    />
                    {/* <input
                        className="input-nombre my-2 mx-2"
                        type="text"
                        name="image"
                        value={imageName}
                        placeholder="nombre de la imagen"
                        onChange={(e) => setImageName(e.target.value)}
                    /> */}
                    {/* <input
                        className="input-descripcion my-2 mx-2"
                        type="text"
                        name="descripcion"
                        value={imageDescripcion}
                        placeholder="Descripcion de la imagen"
                        onChange={(e) => setImageDescripcion(e.target.value)}
                    /> */}
                </div>
            </div>
            <div className="ficha-perfil mt-3">

	return (
		<><div className="card-profile">
            <img src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2018/02/23/15193541612182.jpg" className="photo-profile rounded-circle" alt="..."></img>
        <div className="ficha-perfil">

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
    );

            </div></div>
            </>
	);

};
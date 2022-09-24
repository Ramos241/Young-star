import React, { useState, useEffect, useContext } from "react";
// import React { useContext } from "react";

import { Context } from "../store/appContext";

export const Profile_card = () => {

    const { store, actions } = useContext(Context);
    const [imageFile, setImageFile] = useState();
    const [imageName, setImageName] = useState("");

    const handleSubmit = () => {
        const formData = new FormData();
        formData.append("file", imageFile);
        formData.append("name", imageName);
        actions.uploadImg(formData);
    };

    useEffect(() => {
        if (store.products && store.products.length > 0) return;
        actions.getPost();
    }, []);

    return (
        <>
            <div className="container">
                <div className="my-5">
                    <input
                        className="input-group my-2"
                        type="file"
                        name="file"
                        onChange={(e) => setImageFile(e.target.files[0])}
                        accept=".jpg, .jpeg, .png"
                    />
                    <input
                        className="input-group my-2"
                        type="text"
                        name="image"
                        value={imageName}
                        placeholder="nombre de la imagen"
                        onChange={(e) => setImageName(e.target.value)}
                    />
                    <button className="btn btn-primary" onClick={() => handleSubmit()}>
                        Subir imagen
                    </button>
                </div>
            </div>

            <div className="row gap-lg-1 justify-content-around">
                {store.products &&
                    store.products.map((product) => (
                        <div
                            className="card p-3 col-5 d-flex flex-column justify-content-between" key={product.cloudinary_id}>
                            <div>
                                <img
                                    src={product.img_url}
                                    alt={`product ${product.name}`}
                                    className="w-100"
                                />
                                {product.name}
                            </div>
                            <button
                                className="btn btn-primary mt-3"
                                onClick={() => actions.deleteProduct(product.id)}
                            >
                                Eliminar
                            </button>
                        </div>
                    ))}
            </div>
            {/* <img src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2018/02/23/15193541612182.jpg" className="photo-profile rounded-circle" alt="..."></img> */}
            <div className="ficha-perfil">
                <h1><strong style={{ color: "white" }}>Jose Perez</strong></h1>
                <p className="p-2" style={{ color: "white" }}>Joven pitcher de 19 años, Cararacas-Venezuela, Joven pitcher de 19 años, Cararacas-VenezuelaJoven pitcher de 19 años, Cararacas-VenezuelaJoven pitcher de 19 años, Cararacas-Venezuela</p>
                <p className="p-2" style={{ color: "white" }}>Position: Pitcher</p>
                <p className="p-2" style={{ color: "white" }}>Height: 6,23ft</p>
                <p className="p-2" style={{ color: "white" }}>Weight: 240.3lb</p>
                <p className="p-2" style={{ color: "white" }}>Throwing arm: Left</p>
                <p className="p-2" style={{ color: "white" }}>batting side: Left</p>
                <p className="p-2" style={{ color: "white" }}>Club: San Diego Padres Academy</p>
            </div>
        </>
    );
};
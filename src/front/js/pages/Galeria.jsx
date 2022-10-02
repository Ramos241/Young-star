import { Navbar_galeria } from "../component/Navbar_galeria.jsx"
import React, { useState, useEffect, useContext } from "react";
import "../../styles/Galeria.css";
import { Context } from "../store/appContext";

export const Galeria = () => {

    const { store, actions } = useContext(Context);
    const [imageFile, setImageFile] = useState();

    const handleSubmit = () => {
        const formData = new FormData();
        formData.append("img", imageFile);
        actions.uploadImg(formData);
    };

    useEffect(() => {
        if (store.post && store.post.length > 0) return;
        actions.getPost();
    }, []);

    return (
        <>
            <Navbar_galeria />
            <h1 className="title-galeria pt-3">Galeria</h1>
            <div className=" row">
                {store.post && store.post.map((post) => (
                    <div div className="col-md-2 p-3 card-image mx-2 " key={post.cloudinary_id} >
                        <img
                            src={post.img_url}
                            className="img-fluid h-100 w-100 "
                            alt="img"
                        />
                        <button className="boton-eliminar mt-3 w-10" onClick={() => actions.deletePost(post.id)}><i className="fa-regular fa-trash-can"></i></button>
                    </div>
                ))}
            </div>
        </>
    )
}
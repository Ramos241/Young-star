import { Navbar_galeria } from "../component/Navbar_galeria.jsx"
import React, { useState, useEffect, useContext, Component } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom"

export const Upload_imagen = () => {

    const { store, actions } = useContext(Context);
    const [imageFile, setImageFile] = useState();

    const handleSubmit = () => {
        const formData = new FormData();
        formData.append("img", imageFile);
        actions.uploadImg(formData);
    }

    useEffect(() => {
        if (store.post && store.post.length > 0) return;
        actions.getPost();
    }, []);

    return (
        <>
            <Navbar_galeria />
            <div className="col-md-4 offset-md-4 pt-5">
                <div className="card bg-dark text-light text-center rounded-0 p-4">
                    <div className="card-body">
                        <h3 className="py-2">Sube tu Imagen</h3>
                        <form>
                            <input
                                className="form-control bg-dark text-light rounded-0 border border-secondary"
                                type="file"
                                name="file"
                                onChange={(e) => setImageFile(e.target.files[0])}
                                accept=".jpg, .jpeg, .png"
                            />
                        </form>
                        <div className="my-3" >
                            <button className=" boton-subir btn btn-success rounded-0 w-100 " onClick={() => handleSubmit()}><i className="fa-solid fa-upload"></i></button>
                        </div>
                    </div>
                    <div className="navbar-nav ms-auto">
                        <Link className="nav-link" to="/Galeria"><i className="fa-solid fa-left-long"></i></Link>
                    </div>
                </div>
            </div>
        </>
    )
}
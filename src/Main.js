import React, { useEffect, useState } from "react";
//Se importa Link de react router dom, que es el que hara la funcion
//de lals etiquetas <a>, hara referencias a las rutas especficadas en App.js
//Importar en cada archivo que se necesite
import axios from 'axios'
import { Link } from "react-router-dom";
import './App.css';
import NavCategories from "./componentes_main/NavCategories"
import SideBar from "./componentes_main/SideBar"
import Menu from "./componentes_main/Menu"
import Cookies from "universal-cookie";
const cookies = new Cookies()
function Main() {
    const [block, setBlock] = useState(false)


    const [categorias, setCategorias] = useState([])
    useEffect(() => {
        const getCategories = async () => {
            return await axios.get("http://127.0.0.1:8000/api/categories", {
                headers: { Authorization: `Bearer ${cookies.get("Authorization")}` }
            }).catch(response => {
                console.log(response)
            })
        }
        getCategories().then((data) => {
            setCategorias(data.data.data)
        })
    }, []);
    console.log(categorias)
    return (
        <section>
            {/* <Navbar/> */}
            <div className="image__nav">
            </div>

            <div className="position-relative">

                <NavCategories items={categorias} />


                <div className="spacius"></div>
                <div className="row">
                    <div id="spacephantom" className="col-md-2 spacephantom">

                    </div>

                    <SideBar items={categorias} />




                    <div className="modal fade" id="addModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog ">
                            <div className="modal-content modalLook">
                                <div className="modal-header text-light bg-dark">
                                    <h5 className="text-center modal-title" id="exampleModalLabel">Nuevo producto</h5>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <div className="row">
                                            <div className="col-md-8 mb-3">
                                                <label htmlFor="inputName" className="fw-bold form-label">Nombre</label>
                                                <input type="text" className="form-control" id="name" aria-describedby="name" placeholder="Nombre de producto" required />
                                                <div id="name" className="form-text">Elije un nombre que realmente represente a tu producto.</div>
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <label htmlFor="inputPrecio" className="fw-bold form-label">Precio</label>
                                                <input type="number" className="form-control" id="precio" aria-describedby="name" placeholder="00.00" required />
                                            </div>
                                        </div>


                                        <div className="mb-3">
                                            <label className="fw-bold" htmlFor="floatingTextarea">Descripción</label>
                                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                        </div>

                                        <div className="row">
                                            <label htmlFor="chekCategoria" className="text-center  fw-bold form-label">Elegir Categoria</label>
                                            <div className="col text-center">
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" />
                                                    <label className="form-check-label" htmlFor="inlineRadio1">Bebidas</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" />
                                                    <label className="form-check-label" htmlFor="inlineRadio2">Alimentos</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" defaultValue="option3" />
                                                    <label className="form-check-label" htmlFor="inlineRadio3">Postres</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-5">
                                            <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                                                <option select="true">Open this select menu</option>
                                                <option defaultValue="1">Bebidas calientes</option>
                                                <option defaultValue="2">Bebidas frías</option>
                                                <option defaultValue="3">Bebidas base te</option>
                                            </select>
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="inputImagen" className="fw-bold form-label">Imagen del producto</label><br />
                                            <input type="file" id="filechooser" />
                                        </div>
                                        <br />

                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-outline-danger card" data-bs-dismiss="modal">Cancelar</button>
                                            <button type="submit" className="btn btn-outline-success card">Guardar</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Menu categorias={categorias}/>

                </div>

            </div>



        </section>

    );
}
export default Main;

window.onscroll = function () {
    //console.log(window.scrollY);
    if (window.scrollY >= 571) {
        document.getElementById("space2").style.position = "fixed";
        document.getElementById("space2").style.top = "0%";
        document.getElementById("space2").style.marginLeft = "10px";
        document.getElementById("spacephantom").style.display = "block";
    } else {
        document.getElementById("space2").style.position = "relative";
        document.getElementById("space2").style.marginLeft = "10px";
        document.getElementById("space2").style.marginBottom = "20px";
        document.getElementById("space2").style.marginTop = "35px";
        document.getElementById("spacephantom").style.display = "none";
    }

    if (window.scrollY >= 491) {
        document.getElementById("nav1").style.position = "fixed";
        document.getElementById("nav1").style.zIndex = "5";
        document.getElementById("nav1").style.top = "0";
        document.getElementById("nav1").style.borderRadius = "20px";
        document.getElementById("nav1").style.backgroundColor = "rgb(216, 216, 216)";
    } else {
        document.getElementById("nav1").style.position = "relative";
        document.getElementById("nav1").style.backgroundColor = "rgba(30, 192, 192, 0.0)";
    }

};
function uploadFile() {
    var blobFile = $('#filechooser').files[0];
    var formData = new FormData();
    formData.append("fileToUpload", blobFile);

    $.ajax({
        url: "upload.php",
        type: "POST",
        data: formData,
        processData: false,
        contentType: false,
        success: function (response) {
            // .. hacer algo...
        },
        error: function (jqXHR, textStatus, errorMessage) {
            console.log(errorMessage); // Opcional
        }
    });
};


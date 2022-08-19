import React, { Component, useState } from "react";
//Se importa Link de react router dom, que es el que hara la funcion
//de lals etiquetas <a>, hara referencias a las rutas especficadas en App.js
//Importar en cada archivo que se necesite
import "./App.css";
import Navbar from "./componentes/Navbar";
import iTea from "./images/shaken-black-tea.png";
import iCafe2 from "./images/cajeta-frappuccino.png";
import iSalado from "./images/Sandwich Pavo Panela.png";
import iSaladoH from "./images/Grilled Cheese Sandwich.png";
import iSaludable from "./images/Ensalada Cesar.png";
import Card from "./componentes/Card";
import Cookies from "universal-cookie";
import BlockUI from "./componentes/BlockUI/BlockUI";
import { Link, NavLink } from "react-router-dom";

function Main() {
  const [block, setBlock] = useState(false);
  return (
    <section>
      <BlockUI blocking={block} />
      {/* <Navbar/> */}
      <div className="image__nav"></div>

      {/* PARA IR AL ADMINISTRATIVO */}

      <div className="btn__adm">
        <NavLink to="/Admin/Usuarios" className="">
          <button type="button" className=" btn btn-outline-secondary">
            <b>Acceso Administrativo</b>
          </button>
        </NavLink>
      </div>

      <div className="position-relative">
        <nav
          id="nav1"
          className="navbar start-50 translate-middle-x navb px-3  "
        >
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a className="nav-link link-secondary" href="#scrollspyHeading1">
                Bebidas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-secondary" href="#scrollspyHeading2">
                Alimentos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-secondary" href="#scrollspyHeading3">
                Postres
              </a>
            </li>
          </ul>
        </nav>
        <div className="spacius"></div>
        <div className="row">
          <div id="spacephantom" className="col-md-2 spacephantom"></div>
          <div id="space2" className="col-md-2 d-none d-md-block space2">
            <h5>Categorias</h5>

            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    <h6>Bebidas</h6>
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <a
                      className="nav-link link-secondary"
                      href="#BebidasCalientes"
                    >
                      Bebidas calientes
                    </a>
                    <a className="nav-link link-secondary" href="#BebidasFrias">
                      Bebidas Frias
                    </a>
                    <a
                      className="nav-link link-secondary"
                      href="#BebidasBaseTe"
                    >
                      Bebidas Base Té{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    <h6>Aliementos</h6>
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <a className="nav-link link-secondary" href="#Salado">
                      Salado
                    </a>
                    <a
                      className="nav-link link-secondary"
                      href="#SaladoRecienHorneado"
                    >
                      Salado Recién Horneado
                    </a>
                    <a className="nav-link link-secondary" href="#Saludable">
                      Saludable
                    </a>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    <h6>Postres</h6>
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <p>Bebidas calientes</p>
                    <p>Bebidas frias</p>
                    <p>Bebidas base té</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 
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
                                            <input type="text" className="form-control" id="name" aria-describedby="name" placeholder="Nombre de producto" required/>
                                            <div id="name" className="form-text">Elije un nombre que realmente represente a tu producto.</div>
                                      </div>  
                                      <div className="col-md-4 mb-3">
                                            <label htmlFor="inputPrecio" className="fw-bold form-label">Precio</label>
                                            <input type="number" className="form-control" id="precio" aria-describedby="name" placeholder="00.00" required/>
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
                                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1"/>
                                            <label className="form-check-label"  htmlFor="inlineRadio1">Bebidas</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2"/>
                                            <label className="form-check-label"  htmlFor="inlineRadio2">Alimentos</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" defaultValue="option3"/>
                                            <label className="form-check-label"  htmlFor="inlineRadio3">Postres</label>
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
                                    <label htmlFor="inputImagen" className="fw-bold form-label">Imagen del producto</label><br/>
                                    <input  type="file" id="filechooser"/>
                                    </div>
                                    <br/>
                                                            
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-outline-danger card" data-bs-dismiss="modal">Cancelar</button>
                                    <button type="submit" className="btn btn-outline-success card">Guardar</button>
                                </div>
                            </form>
                            </div>
                                </div>
                            </div>
                            </div> */}

          <div className="col-md-9">
            <div
              data-bs-spy="scroll"
              data-bs-target="#navbar-example2"
              data-bs-offset="0"
              className="scrollspy-example"
              tabIndex="0"
            >
              <h1 id="scrollspyHeading1">Bebidas</h1>
              <div className="space1">
                <div className="row">
                  <hr />
                  <h5 className="text-center" id="BebidasCalientes">
                    Bebidas calientes
                  </h5>
                  <hr />
                  <div className="col-md-4">
                    <Card />
                  </div>

                  <div className="col-md-4">
                    <Card />
                  </div>
                  <div className="col-md-4">
                    <Card />
                  </div>
                </div>
                <div className="row">
                  <hr />
                  <h5 className="text-center" id="BebidasFrias">
                    Bebidas Frías
                  </h5>
                  <hr />
                  <div className="col-md-4">
                    <div className="card card_Backgraund">
                      <div className="card-body text-center">
                        <img src={iCafe2} className="img__Cafe"></img>
                        <h5 className="card-title">Mocha</h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                          $00.00
                        </h6>
                        <p className="card-text">
                          Nuestro característico espresso se combina con salsa
                          de chocolate blanco, leche al vapor y crema batida.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <hr />
                  <h5 className="text-center" id="BebidasBaseTe">
                    Bebidas Base Té
                  </h5>
                  <hr />
                  <div className="col-md-4">
                    <div className="card card_Backgraund">
                      <div className="card-body text-center">
                        <img src={iTea} className="img__Cafe"></img>
                        <h5 className="card-title">Mocha</h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                          $00.00
                        </h6>
                        <p className="card-text">
                          Nuestro característico espresso se combina con salsa
                          de chocolate blanco, leche al vapor y crema batida.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h1 id="scrollspyHeading2">Aliementos</h1>
              <div className="space1">
                <div className="row">
                  <hr />
                  <h5 className="text-center" id="Salado">
                    Salado
                  </h5>
                  <hr />
                  <div className="col-md-4">
                    <div className="card card_Backgraund">
                      <div className="card-body text-center">
                        <img src={iSalado} className="img__Cafe"></img>
                        <h5 className="card-title">Mocha</h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                          $00.00
                        </h6>
                        <p className="card-text">
                          Nuestro característico espresso se combina con salsa
                          de chocolate blanco, leche al vapor y crema batida.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card card_Backgraund">
                      <div className="card-body text-center">
                        <img src={iSalado} className="img__Cafe"></img>
                        <h5 className="card-title">Mocha</h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                          $00.00
                        </h6>
                        <p className="card-text">
                          Nuestro característico espresso se combina con salsa
                          de chocolate blanco, leche al vapor y crema batida.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card card_Backgraund">
                      <div className="card-body text-center">
                        <img src={iSalado} className="img__Cafe"></img>
                        <h5 className="card-title">Mocha</h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                          $00.00
                        </h6>
                        <p className="card-text">
                          Nuestro característico espresso se combina con salsa
                          de chocolate blanco, leche al vapor y crema batida.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <hr />
                  <h5 className="text-center" id="SaladoRecienHorneado">
                    Salado Recién Horneado
                  </h5>
                  <hr />
                  <div className="col-md-4">
                    <div className="card card_Backgraund">
                      <div className="card-body text-center">
                        <img src={iSaladoH} className="img__Cafe"></img>
                        <h5 className="card-title">Mocha</h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                          $00.00
                        </h6>
                        <p className="card-text">
                          Nuestro característico espresso se combina con salsa
                          de chocolate blanco, leche al vapor y crema batida.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <hr />
                  <h5 className="text-center" id="Saludable">
                    Saludable
                  </h5>
                  <hr />
                  <div className="col-md-4">
                    <div className="card card_Backgraund">
                      <div className="card-body text-center">
                        <img src={iSaludable} className="img__Cafe"></img>
                        <h5 className="card-title">Mocha</h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                          $00.00
                        </h6>
                        <p className="card-text">
                          Nuestro característico espresso se combina con salsa
                          de chocolate blanco, leche al vapor y crema batida.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h1 id="scrollspyHeading3">Postres</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Main;

window.onscroll = function () {
  //console.log(window.scrollY);
  if (window.scrollY >= 571) {
    $("#space2").style.position = "fixed";
    $("#space2").style.top = "0%";
    $("#space2").style.marginLeft = "10px";
    $("#spacephantom").style.display = "block";
  } else {
    $("#space2").style.position = "relative";
    $("#space2").style.marginLeft = "10px";
    $("#space2").style.marginBottom = "20px";
    $("#space2").style.marginTop = "35px";
    $("#spacephantom").style.display = "none";
  }

  if (window.scrollY >= 491) {
    $("#nav1").style.position = "fixed";
    $("#nav1").style.zIndex = "5";
    $("#nav1").style.top = "0";
    $("#nav1").style.borderRadius = "20px";
    $("#nav1").style.backgroundColor = "rgb(216, 216, 216)";
  } else {
    $("#nav1").style.position = "relative";
    $("#nav1").style.backgroundColor = "rgba(30, 192, 192, 0.0)";
  }
};
function uploadFile() {
  var blobFile = $("#filechooser").files[0];
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
    },
  });
}

import React,{Component} from "react";
//Se importa Link de react router dom, que es el que hara la funcion
//de lals etiquetas <a>, hara referencias a las rutas especficadas en App.js
//Importar en cada archivo que se necesite
import { Link } from "react-router-dom";
import './App.css';
import Navbar from "./Navbar";
import iCafe1 from "./images/mocha.png";
import iTea from './images/shaken-black-tea.png';
import iCafe2 from './images/cajeta-frappuccino.png';
import iSalado from './images/Sandwich Pavo Panela.png';
import iSaladoH from './images/Grilled Cheese Sandwich.png';
import iSaludable from './images/Ensalada Cesar.png';



function Main() {
     return (
       <section>
           <Navbar/>
           <div className="image__nav">
           </div>

            <div className="position-relative">

            <nav id="nav1" className="navbar start-50 translate-middle-x navb px-3  ">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                    <a className="nav-link link-secondary" href="#scrollspyHeading1">Bebidas</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link link-secondary" href="#scrollspyHeading2">Alimentos</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link link-secondary" href="#scrollspyHeading3">Postres</a>
                    </li>
                </ul>
            </nav>
                <div className="spacius"></div>
                <div className="row">
                    <div id="spacephantom" className="col-md-2 spacephantom">

                    </div>
                    <div id="space2" className="col-md-2 d-none d-md-block space2">
                        
                        <h5>Categorias</h5> 

                        <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                               <h6>Bebidas</h6> 
                            </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                <a className="nav-link link-secondary" href="#BebidasCalientes">Bebidas calientes</a>
                                <a className="nav-link link-secondary" href="#BebidasFrias">Bebidas Frias</a>
                                <a className="nav-link link-secondary" href="#BebidasBaseTe">Bebidas Base Té </a> 
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                <h6>Aliementos</h6> 
                            </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                     <a className="nav-link link-secondary" href="#Salado">Salado</a>
                                     <a className="nav-link link-secondary" href="#SaladoRecienHorneado">Salado Recién Horneado</a>
                                     <a className="nav-link link-secondary" href="#Saludable">Saludable</a>
                                 </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                 <h6>Postres</h6> 
                            </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                  <p>Bebidas calientes</p>
                                  <p>Bebidas frias</p>
                                  <p>Bebidas base té</p>
                            </div>
                            </div>
                        </div>
                        </div>




                              
                    </div>

                    <div className="col-md-9">
                        <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" className="scrollspy-example" tabindex="0">
                            <h1 id="scrollspyHeading1">Bebidas</h1>
                            <div className="space1">
                                <div className="row">
                                    <hr/>
                                    <h5 className="text-center" id="BebidasCalientes">Bebidas calientes</h5>
                                    <hr/>
                                    <div className="col-md-4">

                                        <div className="card card_Backgraund">
                                        <div className="card-body text-center">
                                        <img src={iCafe1} className="img__Cafe"></img>
                                        <h5 className="card-title">Mocha</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">$00.00</h6>
                                        <p className="card-text">Nuestro característico espresso se combina con salsa de chocolate blanco, leche al vapor y crema batida.</p>
                                        </div>
                                        </div>

                                    </div>
                                    <div className="col-md-4">

                                        <div className="card card_Backgraund">
                                        <div className="card-body text-center">
                                        <img src={iCafe1} className="img__Cafe"></img>
                                        <h5 className="card-title">Mocha</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">$00.00</h6>
                                        <p className="card-text">Nuestro característico espresso se combina con salsa de chocolate blanco, leche al vapor y crema batida.</p>
                                        </div>
                                        </div>

                                    </div>
                                    <div className="col-md-4">

                                        <div className="card card_Backgraund">
                                        <div className="card-body text-center">
                                        <img src={iCafe1} className="img__Cafe"></img>
                                        <h5 className="card-title">Mocha</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">$00.00</h6>
                                        <p className="card-text">Nuestro característico espresso se combina con salsa de chocolate blanco, leche al vapor y crema batida.</p>
                                        </div>
                                        </div>

                                    </div>
                                
                                </div>
                                <div className="row">
                                <hr/>
                                <h5 className="text-center" id="BebidasFrias">Bebidas Frías</h5>
                                <hr/>    
                                <div className="col-md-4">
                                        <div className="card card_Backgraund">
                                        <div className="card-body text-center">
                                        <img src={iCafe2} className="img__Cafe"></img>
                                        <h5 className="card-title">Mocha</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">$00.00</h6>
                                        <p className="card-text">Nuestro característico espresso se combina con salsa de chocolate blanco, leche al vapor y crema batida.</p>
                                        </div>
                                        </div>

                                    </div>    
                                    

                                </div>
        
                                <div className="row">
                                <hr/>
                                <h5 className="text-center" id="BebidasBaseTe">Bebidas Base Té</h5>
                                <hr/>    
                                <div className="col-md-4">
                                        <div className="card card_Backgraund">
                                        <div className="card-body text-center">
                                        <img src={iTea} className="img__Cafe"></img>
                                        <h5 className="card-title">Mocha</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">$00.00</h6>
                                        <p className="card-text">Nuestro característico espresso se combina con salsa de chocolate blanco, leche al vapor y crema batida.</p>
                                        </div>
                                        </div>

                                    </div>    
                                    

                                </div>
                            </div>
                           
                            <h1 id="scrollspyHeading2">Aliementos</h1>
                            <div className="space1">
                                <div className="row">
                                    <hr/>
                                    <h5 className="text-center" id="Salado">Salado</h5>
                                    <hr/>
                                    <div className="col-md-4">

                                        <div className="card card_Backgraund">
                                        <div className="card-body text-center">
                                        <img src={iSalado} className="img__Cafe"></img>
                                        <h5 className="card-title">Mocha</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">$00.00</h6>
                                        <p className="card-text">Nuestro característico espresso se combina con salsa de chocolate blanco, leche al vapor y crema batida.</p>
                                        </div>
                                        </div>

                                    </div>
                                    <div className="col-md-4">

                                        <div className="card card_Backgraund">
                                        <div className="card-body text-center">
                                        <img src={iSalado} className="img__Cafe"></img>
                                        <h5 className="card-title">Mocha</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">$00.00</h6>
                                        <p className="card-text">Nuestro característico espresso se combina con salsa de chocolate blanco, leche al vapor y crema batida.</p>
                                        </div>
                                        </div>

                                    </div>
                                    <div className="col-md-4">

                                        <div className="card card_Backgraund">
                                        <div className="card-body text-center">
                                        <img src={iSalado} className="img__Cafe"></img>
                                        <h5 className="card-title">Mocha</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">$00.00</h6>
                                        <p className="card-text">Nuestro característico espresso se combina con salsa de chocolate blanco, leche al vapor y crema batida.</p>
                                        </div>
                                        </div>

                                    </div>
                                
                                </div>
                                <div className="row">
                                <hr/>
                                <h5 className="text-center" id="SaladoRecienHorneado">Salado Recién Horneado</h5>
                                <hr/>    
                                <div className="col-md-4">
                                        <div className="card card_Backgraund">
                                        <div className="card-body text-center">
                                        <img src={iSaladoH} className="img__Cafe"></img>
                                        <h5 className="card-title">Mocha</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">$00.00</h6>
                                        <p className="card-text">Nuestro característico espresso se combina con salsa de chocolate blanco, leche al vapor y crema batida.</p>
                                        </div>
                                        </div>

                                    </div>    
                                    

                                </div>
        
                                <div className="row">
                                <hr/>
                                <h5 className="text-center" id="Saludable">Saludable</h5>
                                <hr/>    
                                <div className="col-md-4">
                                        <div className="card card_Backgraund">
                                        <div className="card-body text-center">
                                        <img src={iSaludable} className="img__Cafe"></img>
                                        <h5 className="card-title">Mocha</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">$00.00</h6>
                                        <p className="card-text">Nuestro característico espresso se combina con salsa de chocolate blanco, leche al vapor y crema batida.</p>
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

window.onscroll = function() {
    console.log(window.scrollY);
    if (window.scrollY >= 385){
      document.getElementById("space2").style.position = "fixed";
      document.getElementById("space2").style.top = "30%";
      document.getElementById("space2").style.marginLeft = "10px";
      document.getElementById("spacephantom").style.display = "block";
    }else {
        document.getElementById("space2").style.position = "relative";
        document.getElementById("space2").style.marginLeft = "10px";
      document.getElementById("space2").style.marginBottom = "20px";
      document.getElementById("space2").style.marginTop = "35px";
      document.getElementById("spacephantom").style.display = "none";
    }

    if (window.scrollY >= 491){
        document.getElementById("nav1").style.position = "fixed";
        document.getElementById("nav1").style.zIndex = "5";
        document.getElementById("nav1").style.top = "0";
        document.getElementById("nav1").style.borderRadius = "20px";
        document.getElementById("nav1").style.backgroundColor = "rgb(216, 216, 216)";
    }else{
        document.getElementById("nav1").style.position = "relative";
        document.getElementById("nav1").style.backgroundColor = "rgba(30, 192, 192, 0.0)";
    }

};
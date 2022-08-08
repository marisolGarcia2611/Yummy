import React,{Component} from "react";
//Se importa Link de react router dom, que es el que hara la funcion
//de lals etiquetas <a>, hara referencias a las rutas especficadas en App.js
//Importar en cada archivo que se necesite
import { Link } from "react-router-dom";
import './App.css';
import Navbar from "./componentes/Navbar";
import logo from './yummy-dark.svg';
import iCafe1 from "./images/mocha.png";
import DiseñoCafe from "./componentes/DiseñoCafe";
import Sidebar from "./componentes/Sidebar";
import TarjetaNombre from "./componentes/TarjetaNombre";





function Orden() {
     return (
       <section>
           <Navbar/>
           <div>
            <div className="row">
              
              {/* SIDEBAR */}
              <div className="col-md-4 side-yellow">
              <Sidebar/>
              </div>
              <div className="col-md-4"></div>
              
              {/*DISEÑO DE CAFE*/}
              <div className="space__stuct col-md-8">
                <h3 className="letters__struct2">BEBIDA CALIENTE</h3>
                <h1 className="letters__struct">Mocha</h1>
                  <br/>

                <div className="row">
                  <div className="col-md-8">

                    {/* TAMAÑO */}
                    <div>
                    <div>
                      <h4 className="fw-light letters__struct3">TAMAÑO</h4>
                      <hr className="letters__struct3"/>
                    </div>
              
                    <div className="row text-center">
                      <div className="btn tarject__btn col-md-2">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="ic2 bi bi-cup" viewBox="0 0 16 16">
                            <path d="M1 2a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1h.5A1.5 1.5 0 0 1 16 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-.55a2.5 2.5 0 0 1-2.45 2h-8A2.5 2.5 0 0 1 1 12.5V2zm13 10h.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5H14v8zM13 2H2v10.5A1.5 1.5 0 0 0 3.5 14h8a1.5 1.5 0 0 0 1.5-1.5V2z"/>
                          </svg>
                          <p className="fw-light lt"><b className="fw-bold">CH</b><br/>$00.00</p>

                      </div>

                      <div className="btn tarject__btn col-md-2">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="ic2 bi bi-cup" viewBox="0 0 16 16">
                            <path d="M1 2a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1h.5A1.5 1.5 0 0 1 16 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-.55a2.5 2.5 0 0 1-2.45 2h-8A2.5 2.5 0 0 1 1 12.5V2zm13 10h.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5H14v8zM13 2H2v10.5A1.5 1.5 0 0 0 3.5 14h8a1.5 1.5 0 0 0 1.5-1.5V2z"/>
                          </svg>
                          <p className="fw-light lt"><b className="fw-bold">MD</b><br/>$00.00</p>

                      </div>

                      <div className="btn tarject__btn col-md-2">
                          <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="ic2 bi bi-cup" viewBox="0 0 16 16">
                            <path d="M1 2a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1h.5A1.5 1.5 0 0 1 16 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-.55a2.5 2.5 0 0 1-2.45 2h-8A2.5 2.5 0 0 1 1 12.5V2zm13 10h.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5H14v8zM13 2H2v10.5A1.5 1.5 0 0 0 3.5 14h8a1.5 1.5 0 0 0 1.5-1.5V2z"/>
                          </svg>
                          <p className="fw-light lt"><b className="fw-bold">GR</b><br/>$00.00</p>

                      </div>
                    </div>

                  </div>

                    {/* TIPO DE LECHE*/}
                  <div>
                    <div>
                      <br/>
                      <h4 className="fw-light letters__struct3">LECHE</h4>
                      <hr className="letters__struct3"/>
                    </div>
                    

                    <div className="row text-center">
                      <div className="btn tarject__btn col-md-3">                          
                        <p className="fw-light lt"><b className="fw-bold">ENTERA</b><br/>$00.00</p>

                      </div>

                      <div className="btn tarject__btn col-md-3">
                      <p className="fw-light lt"><b className="fw-bold">DESLACTOSADA</b><br/>$00.00</p>

                      </div>

                      <div className="btn tarject__btn col-md-3">
                          <p className="fw-light lt"><b className="fw-bold">LIGHT</b><br/>$00.00</p>

                      </div>
                    </div>
                    
                  </div>

                  {/* COMPLEMENTOS */}
                  <div>
                    <div>
                      <br/>
                      <h4 className="fw-light letters__struct3">COMPLEMENTOS</h4>
                      <hr className="letters__struct3"/>
                    </div>
                    

                    <div className="row text-center">
                      <div className="btn tarject__btn col-md-3">                          
                         <p className="fw-light lt"><b className="fw-bold">CHOCOLATE</b><br/>$00.00</p>

                      </div>

                      <div className="btn tarject__btn col-md-3">
                      <p className="fw-light lt"><b className="fw-bold">MALVADISCO</b><br/>$00.00</p>

                      </div>

                      <div className="btn tarject__btn col-md-3">
                      <p className="fw-light lt"><b className="fw-bold">GRANOLA</b><br/>$00.00</p>

                      </div>

                      <div className="btn tarject__btn col-md-3">
                      <p className="fw-light lt"><b className="fw-bold">FRESA</b><br/>$00.00</p>

                      </div>

                    </div>
                    
                  </div>

                  {/* NOMBRE DEL VASO */}
                  <div>
                    <div>
                      <br/>
                      <h4 className="fw-light letters__struct3">NOMBRE EN VASO</h4>
                      <hr className="letters__struct3"/>
                    </div>
                    

                    <div className="row">
                      <div className="col-md-12">   
                         <TarjetaNombre/>                 
                      </div>
                    </div>
                    
                  </div>

                  </div>

                  <div className="col-md-4">
                    <DiseñoCafe/>
                  </div>

                </div>
              </div>

            </div>
          </div>

       </section>
     
    );
  }
export default Orden;
import React,{Component} from "react";
//Se importa Link de react router dom, que es el que hara la funcion
//de lals etiquetas <a>, hara referencias a las rutas especficadas en App.js
//Importar en cada archivo que se necesite
import { Link } from "react-router-dom";
import './App.css';
import Navbar from "./Navbar";
import logo from './yummy-dark.svg';




function Orden() {
     return (
       <section>
           <Navbar/>
           <div className="row">

            <div className="col-md-3">
              <div class="w3-sidebar w3-bar-block tanSide">
              <a href="#" class="w3-bar-item w3-button">Link 1</a>
              <a href="#" class="w3-bar-item w3-button">Link 2</a>
              <a href="#" class="w3-bar-item w3-button">Link 3</a>
            </div>

              <div className="margSide">
              ... page content ...
              </div>
            </div>


            <div className="col-md-8 container px-4 py-5 px-md-5 text-center text-lg-start my-5">
            <h1>Orden</h1>
           </div>
           </div>
           


       </section>
     
    );
  }
export default Orden;

function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}
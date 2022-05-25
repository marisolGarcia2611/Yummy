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
           <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
            <h1>Orden</h1>
         </div>

       </section>
     
    );
  }
export default Orden;
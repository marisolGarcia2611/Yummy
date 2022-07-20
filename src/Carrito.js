import React,{Component} from "react";
//Se importa Link de react router dom, que es el que hara la funcion
//de lals etiquetas <a>, hara referencias a las rutas especficadas en App.js
//Importar en cada archivo que se necesite
import { Link } from "react-router-dom";
import './App.css';
import Navbar from "./componentes/Navbar";






function Carrito() {
     return (
       <section>
           <Navbar/>
           <h1>Carrito</h1>


       </section>
     
    );
  }
export default Carrito;
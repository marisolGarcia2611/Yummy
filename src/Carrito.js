import React,{Component} from "react";
//Se importa Link de react router dom, que es el que hara la funcion
//de lals etiquetas <a>, hara referencias a las rutas especficadas en App.js
//Importar en cada archivo que se necesite
import { Link } from "react-router-dom";
import './App.css';
import Navbar from "./componentes/Navbar";
import TarjetaCarrito from "./componentes/TarjetaCarrito";


function Carrito() {
     return (
       <section>
           <Navbar/>
           <div className="row position__space">
            <h3 className="letters__struct2">CARRITO DE </h3>
            <h1 className="letters__struct">Compras</h1>
           </div>
           <div className="row">
              <div className="col-md-2"> 

              </div>
              <div className=" col-md-10 position__taject">
              <TarjetaCarrito/>
              </div>
           </div>
           
           


       </section>
     
    );
  }
export default Carrito;